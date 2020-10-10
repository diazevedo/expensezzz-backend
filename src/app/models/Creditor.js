import Sequelize, { Model } from 'sequelize';

class Creditor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Creditor, {
      foreignKey: 'debtor_id',
      as: 'debtor',
    });
  }
}

export default Creditor;
