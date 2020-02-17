'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('analysis', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      operacional: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pessoal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      financas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fiscal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      administrativo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comercial: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      juridico: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('analysis');
  }
};
