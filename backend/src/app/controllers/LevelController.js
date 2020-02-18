import Level from '../models/Level';

class LevelController {
    async index(req, res) {
        const levels = await Level.findAll({
            attributes: ['id', 'name'],
        });

        return res.json({ levels });
    }
}

export default new LevelController();