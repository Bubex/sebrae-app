import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/header/undertake_b.png';
import sebrae from '~/assets/sebrae.jpg';

const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('Informe o e-mail.'),
    password: Yup.string().required('Informe a senha.')
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return(
        <>
            <img src={logo} style={style} alt="Undertake" />

            <img src={sebrae} alt="SEBRAE" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Digite seu e-mail" />
                <Input name="password" type="password" placeholder="Insira sua senha" />

                <button type="submit">{ loading ? 'Carregando...' : 'Acessar'}</button>
                <Link to="/registrar">Criar conta</Link>
            </Form>
        </>
    );
}

const style = {
    width: '70%',
    borderBottom: '1px solid white',
    paddingBottom: 40,
}
