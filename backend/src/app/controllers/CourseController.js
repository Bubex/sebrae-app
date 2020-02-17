import Course from '../models/Course';
import CourseCategory from '../models/CourseCategory';

class CourseController {
    async index(req, res) {
        const courses = await Course.findAll({
            attributes: ['name', 'description', 'link', 'thumb'],
            include: [{
                model: CourseCategory, as: 'category', attributes: ['name']
            }]
        });

        return res.json({ courses });
    }

    async store(req, res) {
        const courseExists = await Course.findOne({ where: { name: req.body.name, category_id: req.body.category_id }});

        if(courseExists){
            return res.status(400).send({'error': 'Já existe um curso com este nome para esta categoria.'})
        }

        await Course.create(req.body);

        return res.json({ 'success': 'O curso foi adicionado à base de dados.' });
    }
}

export default new CourseController();