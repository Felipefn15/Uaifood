import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-bottom: 30px;
    box-shadow: 2px 2px #e4e4e4;
    background: white;
    .search {
        width: 70%;
    }
    .buttonSearch {
        height: 85%;
        @media only screen and (max-width: 800px) {
            height: 100%;
        }
    }
    @media only screen and (max-width: 800px) {
        justify-content: center;
        padding-top: 15px;
    }
`;

export const Logo = styled.img`
    padding-left: 50px;
    padding-right: 50px;
    @media only screen and (max-width: 800px) {
        padding-bottom: 15px;
    }
`;
