import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 500px;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFF;
        margin: 150px auto;
        padding: 50px;
        border-radius: 30px;

        img {
            width: 200px;
            height: 200px;
        }

        h1 {
            font-size: 16px;
            font-weight: 500;
            color: #888E92;
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

            &:hover {
                text-decoration: none;
                background: #2a6790;
            }
        }
    }
`;