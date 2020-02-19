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
    border: 2px solid #707070;
    border-radius: 30px;
    padding: 30px;
    
    h1 {
        font-size: 20px;
        font-weight: 900;
        text-align: left;
        margin-bottom: 50px;
    }

    img {
        width: 50%;
        background: #007bff;
        padding: 30px 30px 0 30px;
        border-radius: 30px;
        margin-bottom: 50px;
    }

    ul {
        color: #FFF;

        li {
            height: 100px;
            border-radius: 30px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            padding: 30px;

            span:first-of-type {
                flex: 1;
                text-align: left;
                font-size: 20px;
                font-weight: 900;
            }

            a {
                border: none;
                background: #FFF;
                padding: 5px 30px;
                color: #1057E5;
                border-radius: 30px;
                font-weight: 600;

                &:hover{
                    text-decoration: none;
                    background: #d2cece
                }
            }

            span:last-of-type {
                flex: 1;
                text-align: right;
                font-size: 16px;
                font-weight: 900;
            }
        }

        li.finished {
            background: #1d7500;
        }

        li.activated {
            background: #0E52AA;

            span {
                color: #FFF;
            }
        }

        li.deactivated {
            background: #dcdcdc;

            span {
                color: #B8B9BB;
            }

            a {
                display: none;

                &:hover{
                    text-decoration: none;
                    background: #d2cece
                }
            }
        }
    }
`;