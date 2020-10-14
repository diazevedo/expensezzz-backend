module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('frequency', [
      {
        name: 'single',
        intervalOfDays: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'weekly',
        intervalOfDays: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'fortnightly',
        intervalOfDays: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'monthly',
        intervalOfDays: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('frequency', { debtor_id: null }, {});
  },
};
