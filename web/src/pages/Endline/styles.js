import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
        max-width: 1100px;
        height: 650px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFF;
        margin: 50px auto;
        padding: 50px;
        border-radius: 30px;



        h1 {
            font-size: 35px;
            font-weight: 900;
            color: #0E52AA;
            text-align: center;
            margin: 30px 0;
        }

        h2 {
            font-size: 25px;
            font-weight: 900;
            color: #156BDB;
            text-align: center;
            margin: 30px 0;
        }

        a {
            background: #2B89C8;
            color: white;
            text-transform: uppercase;
            font-weight: 700;
            padding: 5px 60px;
            border-radius: 20px;
            margin-top: 30px;

            &:hover {
                text-decoration: none;
                background: #2a6790;
            }
        }
    }
`;