import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/header/undertake_b.png';
import iconProfile from '~/assets/header/icon-profile.png';

import { Container, Content } from './styles';
import { useDispatch } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    function myProfile() {
        return <Redirect to="/perfil" />
        console.log('oi')
    }

    return(
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="Undertake" />
                    </Link>
                </nav>

                <aside>
                    <Dropdown alignRight>
                        <Dropdown.Toggle>
                            <img src={iconProfile} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/perfil">Meu Perfil</Link></Dropdown.Item>
                            <Dropdown.Item onClick={handleSignOut}>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </aside> 
            </Content>
        </Container>
    )
}