import React from 'react';
import { MainWrapper, Content, Title, Logo } from './style.js';
import Search from '../../components/search/index';
import uaifood from '../../images/logo-white.jpg';
const App = () => {
    return (
        <MainWrapper>
            <Logo src={uaifood} alt="White Uaifood Logo" />
            <Content>
                <Title>Descubra os melhores restaurantes em sua cidade</Title>
                <Search />
            </Content>
        </MainWrapper>
    );
};

export default App;
