import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { registerAnalysisRequest } from '~/store/modules/user/actions';


import { Container } from './styles';


export default function Analysis() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.profile.id);

    function handleSubmit(data) {
        dispatch(registerAnalysisRequest(data, user));    
    }

    return(
        <>
            <Container>
                <h1>Análise de Perfil</h1>
                <p>Obrigado por se cadastrar e seja bem vindo a plataforma! <br />O próximo passo para seguirmos nessa jornada é definir o seu perfil empreendedor. Abaixo você verá áreas específicas que estão diretamente ligadas à administração de uma empresa. E seu papel é definir o quão se sente experiente e confortável em cada uma delas (num nível de 0 a 10) para que possamos lhe ajudar a trilhar o melhor caminho possível para o seu sucesso.</p>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label>Operacional:</label>
                        <Input name="operacional" type="range" min="0" max="10"/>
                    </div>
                    <div>
                        <label>Recursos Humanos:</label>
                        <Input name="pessoal" type="range" min="0" max="10"/>
                    </div>
                    <div>
                        <label>Finanças:</label>
                        <Input name="financas" type="range" min="0" max="10"/>
                    </div>
                    <div>
                        <label>Fiscal:</label>
                        <Input name="fiscal" type="range" min="0" max="10"/>
                    </div>
                    <div>
                        <label>Administrativo:</label>
                        <Input name="administrativo" type="range" min="0" max="10"/>
                    </div>
                    <div>
                        <label>Comercial:</label>
                        <Input name="comercial" type="range" min="0" max="10"/>
                    </div>
                    <div>
                        <label>Jurídico:</label>
                        <Input name="juridico" type="range" min="0" max="10"/>
                    </div>

                    <button type="submit">Gerar Perfil</button>
                </Form>
            </Container>
        </>
    );
}