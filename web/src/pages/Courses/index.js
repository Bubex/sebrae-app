import React, { useState,useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import api from '~/services/api';

import DashInfo from '~/components/DashInfo';

import { Container, Content } from './styles';

export default function Courses() {
    const { level_id, fase } = useLocation().state;
    const [ courses, setCourses ] = useState([]);
    const trail_id = useSelector(state => state.user).trail.id;

    useEffect(() => {
        async function loadCourses() {
            const { data } = await api.post('/access-trail', {
                trail_id, level_id
            });
            setCourses(data.courses);
        }

        loadCourses();
    }, []);

    console.log(courses)

    return (
        <Container>
            <DashInfo />
            <Content>
                <h1>{fase}</h1>
                <ul>
                    {courses.map(curso => (
                        <li key={curso.id}>
                            <img src={curso.thumb} alt={curso.name}/>
                            <div>
                                <h1>{curso.name}</h1>
                                <h2>{curso.category.name}</h2>
                                <a href={curso.link} target="_blank">fazer curso</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </Content>
        </Container>
    );
}