import Sequelize, { Model } from 'sequelize';

class Frequency extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        interval_of_days: Sequelize.INTEGER,
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

export default Frequency;
