import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Analysis from '~/pages/Analysis';
import Courses from '~/pages/Courses';

export default function Routes() {
    return ( <
        Switch >
        <
        Route path = "/"
        exact component = { SignIn }
        /> <
        Route path = "/registrar"
        component = { SignUp }
        />

        <
        Route path = "/dashboard"
        component = { Dashboard }
        isPrivate / >
        <
        Route path = "/analise"
        component = { Analysis }
        isPrivate / >
        <
        Route path = "/cursos"
        component = { Courses }
        isPrivate / >
        <
        /Switch>
    )
}