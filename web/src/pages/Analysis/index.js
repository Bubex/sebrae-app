import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { registerAnalysisRequest } from '~/store/modules/user/actions';


import { Container } from './styles';


export default function Analysis() {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.user);
    console.log(profile)

    function handleSubmit() {
        const data = {
            "operacional": document.querySelector("[name='operacional'").value/10,
            "pessoal": document.querySelector("[name='pessoal'").value/10,
            "financas": document.querySelector("[name='financas'").value/10,
            "fiscal": document.querySelector("[name='fiscal'").value/10,
            "administrativo": document.querySelector("[name='administrativo'").value/10,
            "comercial": document.querySelector("[name='comercial'").value/10,
            "juridico": document.querySelector("[name='juridico'").value/10,
        }
        dispatch(registerAnalysisRequest(data, profile.id));
    }

    function valuetext(value) {
        return `${value}%`;
    }

    return(
        <>
            <Container>
                <h1>Faça o teste para avançar!</h1>
                <p>Abaixo você verá áreas específicas que estão diretamente ligadas à administração de sua empresa. E seu papel é definir o quão se sente experiente e confortável em cada uma delas (num nível de 0 a 10) para que possamos lhe ajudar a trilhar o melhor caminho possível para o seu sucesso.</p>
                <Form onSubmit={handleSubmit} id="form-analysis">
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Operacional</Typography>
                        <Slider 
                        name="operacional" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Recursos Humanos</Typography>
                        <Slider 
                        name="pessoal" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Finanças</Typography>
                        <Slider 
                        name="financas" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Fiscal</Typography>
                        <Slider 
                        name="fiscal" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Administrativo</Typography>
                        <Slider 
                        name="administrativo" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Comercial</Typography>
                        <Slider 
                        name="comercial" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>
                    <div>
                        <Typography id="discrete-slider-always" gutterBottom>Jurídico</Typography>
                        <Slider 
                        name="juridico" 
                        defaultValue={50} 
                        getAriaValueText={valuetext} 
                        aria-labelledby="discrete-slider-always" 
                        step={10} 
                        valueLabelDisplay="on" />
                    </div>

                    <button type="submit">ENVIAR PERFIL</button>
                </Form>
            </Container>
        </>
    );
}