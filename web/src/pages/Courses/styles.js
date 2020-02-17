import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 30px auto 0 auto;
    background: #fff;
    border-radius: 15px;

    h1 {
        margin: 40px auto;
        color: #007ac3;
    }

    ul {
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;

        li {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 50px;

            a {
                display: block;
                text-decoration: none;
                color: inherit;
            }

            img {
                width: 100%;
            }

            h1 {
                margin: 10px auto;
                color: #007ac3;
                font-size: 22px;
            }
        }
    }
`;