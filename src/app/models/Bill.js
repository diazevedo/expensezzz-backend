import Sequelize, { Model, DataTypes } from 'sequelize';

class Bill extends Model {
  static init(sequelize) {
    super.init(
      {
        value: DataTypes.DECIMAL,
        installments: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        frequency: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'debtor_id', as: 'debtor' });
    this.belongsTo(models.Creditor, {
      foreignKey: 'creditor_id',
      as: 'creditor',
    });
  }
}

export default Bill;
