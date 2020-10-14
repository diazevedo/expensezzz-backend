import * as Yup from 'yup';
import Creditor from '../models/Creditor';
import User from '../models/User';

class CreditorController {
  async show(req, res) {
    const creditors = await Creditor.findAll();

    return res.json({ creditors });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(401).json({ error: 'creditor name is required.' });

    const user = await User.findOne({ where: { id: req.userId } });
    if (!user) return res.status(401).json({ error: 'user is not valid.' });

    const type_id = req.body.type_id ? req.body.type_id : null;

    const creditorValidation = await Creditor.findOne({
      where: {
        debtor_id: user.id,
        name: req.body.name,
        type_id,
      },
    });

    if (creditorValidation) {
      return res.status(401).json({ error: 'This creditor already exists.' });
    }

    const creditor = await Creditor.create({
      name: req.body.name,
      debtor_id: user.id,
      type_id,
    });

    return res.json({ id: creditor.id, name: creditor.name });
  }
}

export default new CreditorController();
