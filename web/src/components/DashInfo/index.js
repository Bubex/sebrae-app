import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import user from '~/assets/dashboard/user.png';

import { MenuLateral } from './styles';

export default function DashInfo() {
    const { profile, analysis } = useSelector(state => state.user);
    const dados = Object.values(analysis);

    return (
        <MenuLateral>
            <aside>
                <header>
                    <img src={user} alt="" />
                    <h1>"{profile.level.name}"</h1>
                    <span>{profile.company}</span>
                </header>
                <main>
                    <label>Operacional</label>
                    <ProgressBar min={0} max={10} now={dados[1]} />
                    <label>Pessoal</label>
                    <ProgressBar min={0} max={10} now={dados[2]} />
                    <label>Finanças</label>
                    <ProgressBar min={0} max={10} now={dados[3]} />
                    <label>Fiscal</label>
                    <ProgressBar min={0} max={10} now={dados[4]} />
                    <label>Administrativo</label>
                    <ProgressBar min={0} max={10} now={dados[5]} />
                    <label>Comercial</label>
                    <ProgressBar min={0} max={10} now={dados[6]} />
                    <label>Jurídico</label>
                    <ProgressBar min={0} max={10} now={dados[7]} />
                </main>
                <footer>
                    <button>onde tenho que chegar</button>
                    <button>premiações</button>
                </footer>
            </aside>
        </MenuLateral>
    )
}