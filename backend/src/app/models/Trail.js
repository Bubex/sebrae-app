import Sequelize, { Model, Sequelize } from 'sequelize';

class Trail extends Model {
    static init(sequelize) {
        super.init(
            {
                nv1: Sequelize.STRING,
                nv2: Sequelize.STRING,
                nv3: Sequelize.STRING,
                nv4: Sequelize.STRING,
            }, {
                sequelize
            }
        );

        return this;
    }
}

export default Trail;