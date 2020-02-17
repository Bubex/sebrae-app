'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('course_categories', [
      {
        "name": "Planejamento",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "Finanças",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "Pessoas",
        "created_at": new Date(),
        "updated_at": new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('course_categories', null, {});
  }
};
