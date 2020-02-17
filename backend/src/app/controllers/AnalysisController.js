import Analysis from '../models/Analysis';
import User from '../models/User';

class AnalysisController {
    async store(req, res) {

        const user = await User.findByPk(req.body.user_id);

        if(!user){
            return res.json({ error: "Usuário não encontrado." });
        }

        const { obj_analysis } = req.body;

        const analysis = await Analysis.create(obj_analysis);

        if(!analysis){
            return res.json({ error: "Erro ao salvar análise de perfil." });
        }

        const update = await user.update({ analysis_id: analysis.id });

        return res.json({ analysis });
    }
}

export default new AnalysisController();