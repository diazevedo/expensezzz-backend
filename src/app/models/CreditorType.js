import Sequelize, { Model } from 'sequelize';

class CreditorType extends Model {
  static init(sequelize) {
    super.init(
      {
        _id: Sequelize.INTEGER,
        type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'debtor_id', as: 'debtor' });
  }
}

export default CreditorType;
