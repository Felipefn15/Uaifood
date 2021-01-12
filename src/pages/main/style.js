import styled from 'styled-components';
import bg from '../../images/bg.jpg';

export const MainWrapper = styled.main`
    background-image: url(${bg});
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
        height: 120vh;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-self: center;
    max-width: 45vw;
    @media only screen and (max-width: 600px) {
        max-width: 100%;
    }
`;
export const Title = styled.h1`
    color: white;
    font-size: 45px;
    @media only screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const Logo = styled.img`
    width: 20vw;
    position: fixed;
    top: 0;
    margin-top: 30px;
    @media only screen and (max-width: 600px) {
        width: 50vw;
        margin-top: 10px;
    }
`;
