import styled from 'styled-components';

export const Container = styled.div`
    background: #007ac3;
    padding: 0 30px;
    color: white;
    margin: auto;
`;

export const Content = styled.div`
    height: 70px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    nav {
        display: flex;
        align-items: center;

        img {
            width: 15%;
            margin-right: 20px;
            padding-right: 20px;
        }
    }

    aside {
        display: flex;
        align-items: center;

        .dropdown{

            button{
                background-color: transparent;
                border: none;

                &::after{
                    display: none;
                }

                &:focus {
                    background-color: transparent;
                    border: none;
                    box-shadow: none; 
                }
            }
        }
    }
`;