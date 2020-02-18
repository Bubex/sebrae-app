'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('course_categories', [{
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
            },
            {
                "name": "Empreendedorismo",
                "created_at": new Date(),
                "updated_at": new Date(),
            },
            {
                "name": "Mercado e Vendas",
                "created_at": new Date(),
                "updated_at": new Date(),
            },
            {
                "name": "Inovação",
                "created_at": new Date(),
                "updated_at": new Date(),
            },
            {
                "name": "Organização",
                "created_at": new Date(),
                "updated_at": new Date(),
            },
            {
                "name": "Jurídico",
                "created_at": new Date(),
                "updated_at": new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('course_categories', null, {});
    }
};