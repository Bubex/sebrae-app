import Sequelize, { Model, Sequelize } from 'sequelize';

class CourseCategory extends Model {
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

export default CourseCategory;