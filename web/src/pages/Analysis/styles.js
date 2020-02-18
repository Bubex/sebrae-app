import styled from 'styled-components';

export const Container = styled.div`
    max-width: 650px;
    margin: 20px auto;
    background: #FFF;
    border-radius: 20px;
    padding: 50px;
    color: #007ac3;
    text-align: center;
    
    h1 {
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: 900;
    }
    
    p {
        margin-bottom: 50px;
        font-weight: 700;
        font-size: 16px;
    }

    form {
        margin-top: 40px;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 250px;
            margin: 50px auto;

            .MuiTypography-root {
                color: #33445A;
            }

            .MuiSlider-root {
                color: #2699FB;

                .MuiSlider-rail {
                    height: 15px;
                    border-radius: 20px;
                }

                .MuiSlider-track {
                    height: 15px;
                    border-radius: 20px;
                }
                .MuiSlider-thumb {
                    width: 15px;
                    height: 15px;
                    margin-top: 0px;
                    margin-left: -7px;
                }

                .PrivateValueLabel-circle-54 {
                    background: #add9fd;
                    border: 1px solid #2699fb;
                }

                .PrivateValueLabel-label-55 {
                    color: #2699fb;
                    font-weight: 800;
                }

                .PrivateValueLabel-label-55 {
                    &::after {
                        content: '%';
                    }
                }
            }
        }

        button {
            border: none;
            background-color: #2699fb;
            border-radius: 30px;
            color: #FFF;
            font-size: 14px;
            padding: 10px 90px;
            font-weight: 600;
            margin-top: 50px;

            &:hover {
                background-color: #568ebb;
            }
        }
    }
`;