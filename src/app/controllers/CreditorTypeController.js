import * as Yup from 'yup';
import CreditorType from '../models/CreditorType';

class CreditorTypeController {
  async show(req, res) {
    const creditorTypes = await CreditorType.findAll({
      where: { debtor_id: req.userId },
    });
    return res.json({ creditorTypes });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required().min(1),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'a type is need.' });

    const CRType = await CreditorType.findOne({
      where: { debtor_id: req.userId, type: req.body.type },
    });

    if (CRType) {
      return res
        .status(409)
        .json({ error: 'this creditor type has been already registered.' });
    }

    const newCreditorType = await CreditorType.create({
      debtor_id: req.userId,
      type: req.body.type,
    });

    return res.status(201).json({ creditorType: newCreditorType });
  }
}

export default new CreditorTypeController();
