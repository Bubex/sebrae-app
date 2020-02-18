import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Radar } from 'react-chartjs-2';
import api from '~/services/api';

import { Container } from './styles';

export default function Profile() {
  const { analysis } = useSelector(state => state.user);
  const dados = Object.values(analysis);

    const data = {
      labels: ['Operacional', 'Pessoal', 'Finanças', 'Fiscal', 'Administrativo', 'Comercial', 'Jurídico'],
      datasets: [
        {
          label: 'Meu perfil',
          backgroundColor: 'rgba(14,82,170,0.6)',
          borderColor: 'rgba(14,82,170,1)',
          pointBackgroundColor: 'rgba(14,82,170,1)',
          pointBorderColor: 'rgba(14,82,170,1)',
          pointHoverBackgroundColor: 'rgba(14,82,170,1)',
          pointHoverBorderColor: 'rgba(14,82,170,1)',
          fontColor: "rgba(14,82,170,1)",
          data: [dados[1], dados[2], dados[3], dados[4], dados[5], dados[6], dados[7]],
        },
      ],
    };

    const options = {
      label: {
        display: false
      },
      defaultFontColor: "rgba(14,82,170,1)",
      legend: {
        display: false,
        fontColor: "rgba(14,82,170,1)",
        labels: {
            fontColor: "rgba(14,82,170,1)",
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
          color: "rgba(14,82,170,0.3)"
        },
        gridLines: { 
          color: "rgba(14,82,170,0.3)" 
        },
        pointLabels: {
          fontColor: "rgba(14,82,170,1)",
          fontSize: 18
      },
      }
    }

    return (
        <Container>
            <h1>Meu perfil</h1>
            <Radar data={data} options={options}/>
        </Container>
    );
}