import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import user from '~/assets/dashboard/user.png'; 

export default function Welcome() {

    return(
        <Container>
            <div>
                <img src={user} alt=""/>
                <h1>O que falta para você alcançar o sucesso do mundo do empreendedorismo?<br />Nós podemos te ajudar!</h1>
                <Link to="/analise">Classificação de Perfil</Link>
            </div>
        </Container>
    );
}