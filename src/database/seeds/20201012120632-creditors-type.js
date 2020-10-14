module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('creditor_types', [
      {
        type: 'person',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'company',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'card',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('creditor_types', { debtor_id: null }, {});
  },
};
