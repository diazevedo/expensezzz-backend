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
    this.belongsTo(models.User, {
      foreignKey: 'debtor_id',
      as: 'debtor',
    });

    this.belongsTo(models.CreditorType, {
      foreignKey: 'type_id',
      as: 'type',
    });
  }
}

export default Creditor;
