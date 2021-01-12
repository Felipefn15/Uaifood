import styled from 'styled-components';
export const SearchWrapper = styled.div`
    display: flex;
    .select {
        width: 100%;
    }
    .css-g1d714-ValueContainer {
        padding: 5px;
    }
    .css-yk16xz-control {
        border-left: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        padding: 5px;
    }
    .css-1pahdxg-control {
        border-left: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        padding: 5px;

        &:hover {
            border-color: hsl(0, 0%, 80%);
            box-shadow: none;
        }
    }
    .css-2613qy-menu {
        max-height: 1px !important;
    }
    @media only screen and (max-width: 600px) {
        margin-left: 5px;
    }
`;

export const Icon = styled.div`
    display: flex;
    margin-bottom: auto;
    background: hsl(0, 0%, 100%);
    border-right: none;
    border-color: hsl(0, 0%, 80%);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-style: solid;
    border-width: 1px 0px 1px 1px;
    align-self: center;
    .mapIcon {
        padding: 15px;
        padding-right: 0px;
        color: #767676;
    }
`;

export const Button = styled.button`
    color: white;
    font-weight: bold;
    background: #39b54a;
    margin-left: 10px;
    box-shadow: none;
    border: 0px;
    cursor: pointer;
    border-radius: 4px;
    width: 150px;
    &:hover {
        background: #39b56a;
    }

    @media only screen and (max-width: 600px) {
        margin-left: 5px;
        margin-right: 5px;
        width: 100px;
    }
`;
