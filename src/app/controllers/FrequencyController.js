import { Op } from 'sequelize';
import * as Yup from 'yup';
import Frequency from '../models/Frequency';

class FrequencyController {
  async show(req, res) {
    const frequencies = await Frequency.findAll({
      where: { debtor_id: { [Op.or]: [null, req.userId] } },
    });

    return res.json({ frequencies });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      interval_of_days: Yup.number().required(),
    });

    if (!(await schema.isValid())) {
      return res
        .status(400)
        .json({ error: 'name and interval of days are required.' });
    }

    const frequencyCheck = await Frequency.findOne({
      where: {
        debtor_id: { [Op.or]: [null, req.userId] },
        name: req.body.name,
      },
    });

    if (frequencyCheck) {
      return res.status(400).json({ error: 'this frequency already exists.' });
    }

    const frequency = await Frequency.create({
      interval_of_days: 21,
      name: req.body.name,
      debtor_id: req.userId,
    });

    return res.status(201).json({ frequency });
  }
}

export default new FrequencyController();
