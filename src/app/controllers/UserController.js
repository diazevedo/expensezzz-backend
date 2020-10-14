import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(409).json({ error: 'Validation has failed.' });
    }

    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(409).json({
        error: 'Sorry, this email is already registered.',
      });
    }

    const user = await User.create(req.body);

    const { id, name, email } = user;

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
