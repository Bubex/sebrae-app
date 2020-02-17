import Sequelize, { Model, Sequelize } from 'sequelize';

class Analysis extends Model {
    static init(sequelize) {
        super.init(
            {
                operacional: Sequelize.INTEGER,
                pessoal: Sequelize.INTEGER,
                financas: Sequelize.INTEGER,
                fiscal: Sequelize.INTEGER,
                administrativo: Sequelize.INTEGER,
                comercial: Sequelize.INTEGER,
                juridico: Sequelize.INTEGER,
            }, {
                sequelize,
                tableName: 'analysis'
            }
        );

        return this;
    }
}

export default Analysis;