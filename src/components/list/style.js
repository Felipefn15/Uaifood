import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 85vh;
`;

export const Card = styled.div`
    box-shadow: 2px 2px 2px 2px #e4e4e4;
    margin: 15px;
    width: 320px;
    background: white;
`;

export const Imagem = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: 200px;
    }
`;

export const Name = styled.div`
    font-size: 20px;
    color: #333;
    font-weight: bold;
    padding-left: 10px;
    padding-top: 10px;
`;

export const Locate = styled.div`
    padding-left: 10px;
    padding-top: 5px;
    font-size: 12px;
    color: #a5a5a5;
`;

export const Stars = styled.div`
    color: #39b54a;
    padding: 5px;
    padding-left: 10px;
`;

export const Informations = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    padding-left: 10px;

    @media only screen and (max-width: 600px) {
        justify-content: center;
        align-self: center;
    }
`;

export const Price = styled.div`
    display: flex;
    background: #39b54a;
    color: #fff;
    font-size: 14px;
    .icon {
        padding: 5px;
        padding-left: 10px;
    }
    p {
        padding: 5px;
        padding-right: 10px;
        margin: 0px;
    }
`;

export const Type = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    background: #e8e8e8;
    padding: 5px;
    margin-left: 5px;
    font-size: 14px;
    p {
        margin: 0px;
    }
`;

export const NoResult = styled.h1`
    font-family: 'Courier New', Courier, monospace;
`;
