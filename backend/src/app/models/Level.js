import Sequelize, { Model, Sequelize } from 'sequelize';

class Level extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            }, {
                sequelize
            }
        );

        return this;
    }
}

export default Level;