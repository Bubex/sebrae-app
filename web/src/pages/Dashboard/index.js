import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import { Container, Content } from './styles';

import DashInfo from '~/components/DashInfo';

import Nv1 from '~/assets/dashboard/nv1.png';
import Nv2 from '~/assets/dashboard/nv2.png';
import Nv3 from '~/assets/dashboard/nv3.png';
import Nv4 from '~/assets/dashboard/nv4.png';

export default function Dashboard() {
    const { profile } = useSelector(state => state.user);
    const lv = profile.level.id
    const [levels, setLevels] = useState([]);
    const imagesNv = ['', Nv1, Nv2, Nv3, Nv4];

    useEffect(() => {
        async function loadLevels() {
            const response = await api.get('/levels');

            setLevels(response.data.levels);
        }

        loadLevels();
    }, []);

    return (
        <Container>
            <DashInfo />
            <Content>
                <h1>Meu desempenho</h1>
                <img src={imagesNv[lv]} alt=""/>
                <ul>
                    {levels.map(level => (
                        <li 
                        key={level.id} 
                        className={level.id == lv ? 'activated' : (level.id < lv ? 'finished' : 'deactivated')}>
                            <span>Fase {level.id} - {level.name}</span>
                            <button>{level.id == lv ? 'continuar' : (level.id < lv ? 'revisar' : '')}</button>
                            <span>{level.id == lv ? 'Em andamento' : (level.id < lv ? 'Finalizado' : 'Bloqueado')}</span>
                        </li>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}