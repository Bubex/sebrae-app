import jwt from 'jsonwebtoken';

import User from '../models/User';
import Level from '../models/Level';
import Analysis from '../models/Analysis';

import authConfig from '../../config/auth';

class SessionController {
    async store (req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ 
            where: { 
                email 
            },
            include: [
                { model: Level, as: 'level' },
                { model: Analysis, as: 'analysis' }, 
            ],
        });

        if(!user) {
            return res.status(401).json({ error: 'Usuário não encontrado.' })
        }

        if(!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha incorreta.' });
        }
        
        const { id, name, level, analysis } = user;

        return res.json({
            user: {
                id, name, email, level, analysis
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            }),
        })
    }
}

export default new SessionController();