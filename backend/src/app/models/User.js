import Sequelize, { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            }, {
                sequelize
            }
        );

        this.addHook('beforeSave', async (user) => {
            if(user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }
    
    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }

    static associate(models) {
        this.belongsTo(models.Level, { foreignKey: 'level_id', as: 'level' });
        this.belongsTo(models.Analysis, { foreignKey: 'analysis_id', as: 'analysis' });
        this.belongsTo(models.Trail, { foreignKey: 'trail_id', as: 'trail' });
    }
}

export default User;