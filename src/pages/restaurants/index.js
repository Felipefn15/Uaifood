import React, { useState } from 'react';
import { RestaurantWrapper, Top, Content } from './style.js';
import Filter from '../../components/filter';
import Header from '../../components/header';
import List from '../../components/list';
const Restaurants = () => {
    const [filter, setFilter] = useState({});
    return (
        <RestaurantWrapper>
            <Top>
                <Header />
            </Top>
            <Content>
                <Filter action={setFilter} />
                <List filter={filter} />
            </Content>
        </RestaurantWrapper>
    );
};

export default Restaurants;
