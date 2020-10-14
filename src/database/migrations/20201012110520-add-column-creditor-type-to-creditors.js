module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('creditors', 'type_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'creditor_types',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
      defaultValue: null,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('creditors', 'type_id');
  },
};
