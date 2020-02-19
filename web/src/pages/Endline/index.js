import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import coroa from '~/assets/coroa.png'; 

export default function Endline() {

    return(
        <Container>
            <div>
                <img src={coroa} alt=""/>
                <h1>PARABÉNS PELA SUA CONQUISTA!</h1>
                <h2>O SEBRAE ACREDITA QUE SUA EMPRESA PODE<br />
                    DECOLAR, POR ISSO, RESERVAMOS UM INGRESSO ESPECIAL<br />
                    PARA QUE VOCÊ CONHEÇA O "SEBRAETEC" E ALAVANQUE<br />
                    AINDA MAIS SEU NEGÓCIO!</h2>
                <a href="https://www.sebrae.com.br/sites/PortalSebrae/Programas/sebraetec-inovar-no-seu-negocio-pode-ser-facil,c38a5415e6433410VgnVCM1000003b74010aRCRD">CLIQUE AQUI E VEJA ESSA OFERTA</a>
            </div>
        </Container>
    );
}