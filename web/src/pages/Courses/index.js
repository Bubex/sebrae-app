import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Container } from './styles';

export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function loadCourses() {
            const response = await api.get('courses');
            setCourses(response.data.courses);
        }

        loadCourses();
    }, []);

    return (
        <Container>
            <h1>Lista de Cursos Disponíveis</h1>
            <ul>
                {courses.map(curso => (
                    <li key={curso.id}>
                        <a href={curso.link} target="_blank">
                            <img src={curso.thumb} alt="" />
                            <h1>{curso.name}</h1>
                            <p>{curso.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </Container>
    );
}