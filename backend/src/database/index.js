import Sequelize, { DatabaseError } from 'sequelize';

import User from '../app/models/User';
import Course from '../app/models/Course';
import CourseCategory from '../app/models/CourseCategory';
import Level from '../app/models/Level';
import Analysis from '../app/models/Analysis';
import Trail from '../app/models/Trail';

import databaseConfig from '../config/database';

const models = [User, Course, CourseCategory, Level, Analysis, Trail];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();