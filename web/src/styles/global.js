import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        min-height: 100%;
        height: 1px;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    @-webkit-keyframes autofill {
        0%,100% {
            color: #666;
            background: transparent;
        }
    }
    
    -webkit-box-shadow: 0 0 0px 1000px white inset;
`;