import styled from 'styled-components';

export const Container = styled.div`
background: #007ac3;
    padding: 0 30px;
    color: white;
    max-width: 1140px;
    margin: auto;
    border-radius: 20px;
`;

export const Content = styled.div`
    height: 85px;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            width: 34%;
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }

        a {
            font-weight: bold;
            color: white;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: white;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 13px;
            color: #b9b9b9;
        }

        span {
            display: block;
            margin-top: 2px;
            color: #d4d4d4;
            cursor: pointer;
        }
    }

    img {
        height: 32px;
        border-radius: 50%;
    }
`;