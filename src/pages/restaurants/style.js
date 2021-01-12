import styled from 'styled-components';

export const RestaurantWrapper = styled.main`
    overflow-x: scroll;
    height: 100vh;
`;

export const Top = styled.main``;

export const Content = styled.main`
    display: flex;
    @media only screen and (max-width: 800px) {
        display: block;
    }
`;
