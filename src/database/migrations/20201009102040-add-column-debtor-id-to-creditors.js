const Datatypes = require('sequelize').DataTypes;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('creditors', 'debtor_id', {
      type: Datatypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'debtor_id');
  },
};
