import { Sequelize } from 'sequelize';

import Course from '../models/Course';
import Trail from '../models/Trail';
import User from '../models/User';


import CourseCategory from '../models/CourseCategory';

class CourseController {
    async index(req, res) {
        const trail = await Trail.findByPk(req.body.trail_id);

        const fase1 = await Course.findAll({
            where: {  },
            attributes: ['name', 'description', 'link', 'thumb'],
            include: [{
                model: CourseCategory,
                as: 'category',
                attributes: ['name']
            }]
        });

        return res.json({ trail });
    }

    async store(req, res) {
        const courseExists = await Course.findOne({ where: { name: req.body.name, category_id: req.body.category_id } });

        if (courseExists) {
            return res.status(400).send({ 'error': 'Já existe um curso com este nome para esta categoria.' })
        }

        await Course.create(req.body);

        return res.json({ 'success': 'O curso foi adicionado à base de dados.' });
    }

    async sort(req, res) {
        console.log(req.body)
        const { user_id } = req.body;

        if(user_id){

            const courses = await Course.findAll({
                attributes: ['id'],
                order: [ [ Sequelize.fn('RAND') ] ],
                limit: 16,
            });

            const nv1 = `${courses[0].id}, ${courses[1].id}, ${courses[2].id}, ${courses[3].id}`;
            const nv2 = `${courses[4].id}, ${courses[5].id}, ${courses[6].id}, ${courses[7].id}`;
            const nv3 = `${courses[8].id}, ${courses[9].id}, ${courses[10].id}, ${courses[11].id}`;
            const nv4 = `${courses[12].id}, ${courses[13].id}, ${courses[14].id}, ${courses[15].id}`;

            const { dataValues } = await Trail.create({ nv1, nv2, nv3, nv4 });

            const user = await User.findByPk(user_id);

            user.update({ trail_id: dataValues.id });

            return res.json({ dataValues });
        }   
    }
}

export default new CourseController();