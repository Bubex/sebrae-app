import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import sebrae from '~/assets/sebrae.jpg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Insira seu nome'),
    email: Yup.string().email('Insira um e-mail válido').required('Insira um e-mail válido'),
    password: Yup.string().required('Insira uma senha').min(8, 'A senha deve ter pelo menos 8 caracteres'),
    password2: Yup.string().oneOf([Yup.ref('password'), null], "As senhas não conferem").required('Confirme sua senha')
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        console.log(dispatch(signUpRequest(name, email, password)));
    }

    return(
        <>
            <img src={sebrae} alt="SEBRAE" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />
                <Input name="password2" type="password" placeholder="Confirme sua senha" />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho conta</Link>
            </Form>
        </>
    );
}