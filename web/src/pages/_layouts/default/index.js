import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({children}) {

    return(
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
}