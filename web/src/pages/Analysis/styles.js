import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1140px;
    margin: 30px auto;
    background: #007ac3;
    border-radius: 20px;
    padding: 50px;
    color: white;
    font-size: 20px;
    text-align: center;
    
    h1 {
        margin-bottom: 40px;
    }
    
    p {
        margin-bottom: 50px;
    }

    form {
        margin-top: 40px;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 250px;
            margin: auto;

            input {
                margin: 20px 0;
                -webkit-appearance: none;
                width: 100%;
                height: 15px;
                border-radius: 5px;  
                background: #d3d3d3;
                outline: none;
                opacity: 0.7;
                -webkit-transition: .2s;
                transition: opacity .2s;

                &::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%; 
                    background: #FFF;
                    cursor: pointer;
                }
                  
                &::-moz-range-thumb {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #FFF;
                    cursor: pointer;
                }
            }
        }

        button {
            background-color: #FFF;
            border: none;
            padding: 10px 25px;
            margin-top: 40px;
            border-radius: 10px;
            font-size: 17px;
            color: #007ac3;
            font-weight: 600;

            &:hover {
                background-color: #c7c7c7f5;
            }
        }
    }
`;