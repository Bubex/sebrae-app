'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('levels', [
      {
        "name": "Zé Ninguém",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "Quase Lá",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "Chefe",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "BOSS",
        "created_at": new Date(),
        "updated_at": new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('levels', null, {});
  }
};
