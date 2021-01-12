import styled from 'styled-components';

export const FilterWrapper = styled.div`
    margin: 10px;
    height: 80vh;
    box-shadow: 2px 2px 2px 2px #e4e4e4;
    background: white;
    @media only screen and (max-width: 800px) {
        margin: 0px;
        height: 35vh;
    }
`;

export const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 75vh;
`;

export const Options = styled.div`
    padding: 3px;
    @media only screen and (max-width: 800px) {
        display: flex;

        align-items: center;
    }
`;

export const Title = styled.div`
    font-size: 15px;
    color: #a5a5a5;
`;

export const Option = styled.div`
    display: flex;
    height: 6vh;
    align-items: center;
    font-size: 15px;
    color: #484848;
    .star {
        color: #a5a5a5;
        font-size: 14px;
    }
    @media only screen and (max-width: 600px) {
        p {
            display: flex;
        }
    }
`;
