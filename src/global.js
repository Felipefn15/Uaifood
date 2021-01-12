import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        margin: 0px;
        position: fixed;
        bottom: 0;
        width: 100vw;
        font-family: Arial, Helvetica, sans-serif;
        background: #fafafa;
    }
`;

export { Global };
