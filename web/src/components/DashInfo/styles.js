import styled from 'styled-components';

export const MenuLateral = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    aside {

        header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Arial', sans-serif;
            color: #2699FB;

            h1 {
                font-size: 20px;
                font-weight: bold;
                margin-top: 15px;
            }

            span {
                font-size: 12px;
            }
        }

        main {
            display: flex;
            flex-direction: column;
            margin-top: 30px;

            label {
                color: #33445A;
                font-size: 14px;
                font-weight: 600;
                text-align: left;
                margin-top: 20px;
            }
            
            .progress {
                background-color: #F1F9FF;
                border-radius: 20px;
                min-width: 200px;
                width: 100%;
                border: 1px solid #007bff;
            }
        }

        footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;

            button {
                color: #FFF;
                font-size: 13px;
                width: 190px;
                height: 35px;
                border-radius: 40px;
                border: none;
                margin-top: 15px;
            }

            button:first-of-type {
                background-color: #1460D2;
            }

            button:last-of-type {
                background-color: #0EBBDF;
            }
        }
    }
`;