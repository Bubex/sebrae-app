import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Radar } from 'react-chartjs-2';
import api from '~/services/api';

import { Container } from './styles';

export default function Dashboard() {

    const analysis = useSelector(state => state.user.analysis);
    const dados = Object.values(analysis);

    const data = {
      labels: ['Operacional', 'Pessoal', 'Finanças', 'Fiscal', 'Administrativo', 'Comercial', 'Jurídico'],
      datasets: [
        {
          label: 'Meu perfil',
          backgroundColor: 'rgba(255,255,255,0.4)',
          borderColor: 'rgba(255,255,255,1)',
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,1)',
          fontColor: "#FFF",
          data: [dados[1], dados[2], dados[3], dados[4], dados[5], dados[6], dados[7]],
        },
      ],
    };

    const options = {
      defaultFontColor: "#FFF",
      legend: {
        labels: {
            fontColor: "#fff",
            fontSize: 18
        }
      }
    }

    return (
        <Container>
            <Radar data={data} options={options}/>
        </Container>
    );
}