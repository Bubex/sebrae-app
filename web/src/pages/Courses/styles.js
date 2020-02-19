import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    margin: 30px auto;
    background: #FFF;
    border-radius: 20px;
    padding: 40px 70px;
    color: #0E52AA;
    font-size: 20px;
    text-align: center;
    display: flex;
`;

export const Content = styled.div`
    width: 80%;
    border-radius: 30px;
    padding: 40px;
    background: #0E52AA;

    h1 {
        color: white;
        text-align: left;
        font-weight: 800;
        font-size: 20px;
    }

    ul {
        li {
            background: #FFF;
            border-radius: 30px;
            display: flex;
            padding: 25px;
            margin-top: 20px;

            img {
                max-width: 250px;
                border-radius: 30px;
            }

            div {
                width: 100%;
                padding: 15px 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                h1 {
                    font-size: 18px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #0C66D9;
                }

                h2 {
                    font-size: 16px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #000;
                }
                
                a {
                    background: #0EBBDF;
                    color: #FFF;
                    font-size: 16px;
                    font-weight: 500;
                    border-radius: 15px;
                    margin-left: auto;
                    padding: 10px 30px;

                    &:hover {
                        background: #1392ad;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`;