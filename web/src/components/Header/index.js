import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import sebrae from '~/assets/sebrae-m.png';

import { Container, Content, Profile } from './styles';
import { useDispatch } from 'react-redux';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return(
        <Container>
            <Content>
                <nav>
                    <img src={sebrae} alt="SEBRAE" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <span onClick={handleSignOut}>Sair</span>
                        </div>
                        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Avatar" />
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}