import React from 'react';
import { HeaderWrapper, Logo } from './style.js';
import Search from '../../components/search';
import uaifood from '../../images/logo-red.jpg';
const Header = () => {
    return (
        <HeaderWrapper>
            <a href="/">
                <Logo src={uaifood} alt="Uaifood Logo" />
            </a>
            <Search />
        </HeaderWrapper>
    );
};

export default Header;
