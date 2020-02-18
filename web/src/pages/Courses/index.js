import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import DashInfo from '~/components/DashInfo';

import { Container, Content } from './styles';

export default function Courses() {
    const [ courses, setCourses ] = useState([]);
    const trail_id = useSelector(state => state.user).trail.id;

    useEffect(() => {
        async function loadCourses() {
            const { data } = await api.post('/access-trail', {
                trail_id
            });
            setCourses(data);
        }

        loadCourses();
    }, []);

    return (
        <Container>
            <DashInfo />
            <Content>
                <h1></h1>
            </Content>
        </Container>
    );
}