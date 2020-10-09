import Creditor from '../models/Creditor';

class CreditorController {
  async show(req, res) {
    const creditors = await Creditor.findAll();

    return res.json({ creditors });
  }
}

export default new CreditorController();
