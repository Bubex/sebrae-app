'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trails', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nv1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nv2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nv3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nv4: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trails');
  }
};
