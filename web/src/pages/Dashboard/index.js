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
          backgroundColor: 'rgba(255,255,255,0.6)',
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
      label: {
        display: false
      },
      defaultFontColor: "#FFF",
      legend: {
        display: false,
        fontColor: "#fff",
        labels: {
            fontColor: "#fff",
            fontSize: 18
        }
      },
      scale: {
        ticks: {
          fontColor: "#000",
          beginAtZero: true,
          max: 10,
        },
        angleLines: { 
          color: "rgba(255,255,255,0.3)"
        },
        gridLines: { 
          color: "rgba(255,255,255,0.3)" 
        },
        pointLabels: {
          fontColor: "#FFF",
          fontSize: 18
      },
      }
    }

    return (
        <Container>
            <h1>Seu Perfil</h1>
            <Radar data={data} options={options}/>
        </Container>
    );
}