import Sequelize, { Model, Sequelize } from 'sequelize';

class Course extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                thumb: Sequelize.STRING,
                link: Sequelize.STRING
            }, {
                sequelize
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.CourseCategory, { foreignKey: 'category_id', as: 'category' });
    }
}

export default Course;