import React, { useEffect, useState } from 'react';
import {
    ListWrapper,
    Card,
    Imagem,
    Name,
    Locate,
    Stars,
    Informations,
    Price,
    Type
} from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faStar } from '@fortawesome/free-solid-svg-icons';
import api from '../../core/Api';
const List = ({ filter }) => {
    const [cityId] = useState(
        window.location.href.split('?')[1].replace('cityId=', '').split('&')[0]
    );
    const [restaurants, setRestaurants] = useState(undefined);
    console.log(filter);
    let options = [];
    useEffect(() => {
        setRestaurants(undefined);
        console.log(filter?.restaurants);
        api.getRestaurants(cityId, filter?.restaurants).then((result) => {
            console.log(result);
            filter.star?.map((content) => {
                result.data.restaurants?.map((item) => {
                    if (
                        parseInt(item.restaurant.user_rating.aggregate_rating, 10) ===
                        parseInt(content, 10)
                    )
                        options.push(item);
                });
            });
            filter.value?.map((content) => {
                if (content === '50') {
                    result.data.restaurants?.map((item) => {
                        if (parseInt(item.restaurant.average_cost_for_two, 10) <= 50)
                            options.push(item);
                    });
                } else if (content === '80') {
                    result.data.restaurants?.map((item) => {
                        if (
                            parseInt(item.restaurant.average_cost_for_two, 10) > 50 &&
                            parseInt(item.restaurant.average_cost_for_two, 10) <= 80
                        )
                            options.push(item);
                    });
                } else if (content === '110') {
                    result.data.restaurants?.map((item) => {
                        if (
                            parseInt(item.restaurant.average_cost_for_two, 10) > 80 &&
                            parseInt(item.restaurant.average_cost_for_two, 10) <= 110
                        )
                            options.push(item);
                    });
                } else if (content === '111') {
                    console.log(content);
                    result.data.restaurants?.map((item) => {
                        console.log(parseInt(item.restaurant.average_cost_for_two, 10));
                        if (parseInt(item.restaurant.average_cost_for_two, 10) > 110)
                            options.push(item);
                    });
                }
            });
            console.log(options);
            setRestaurants(
                filter.star?.length > 0 || filter.value?.length > 0
                    ? options
                    : result.data.restaurants
            );
        });
    }, [cityId, filter]);

    const quantityStars = (value) => {
        if (value >= 5)
            return (
                <Stars>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </Stars>
            );
        else if (value >= 4)
            return (
                <Stars>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </Stars>
            );
        else if (value >= 3)
            return (
                <Stars>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </Stars>
            );
        else if (value >= 2)
            return (
                <Stars>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </Stars>
            );
        else if (value >= 1)
            return (
                <Stars>
                    <FontAwesomeIcon icon={faStar} />
                </Stars>
            );
    };
    return (
        <ListWrapper>
            {restaurants !== undefined &&
                restaurants.map((item, index) => {
                    return (
                        <Card key={index}>
                            <Imagem>
                                <img src={item.restaurant.thumb} alt="Restaurant Thumb" />
                            </Imagem>
                            <Name>{item.restaurant.name}</Name>
                            <Locate>{item.restaurant.location.address}</Locate>
                            {quantityStars(
                                parseFloat(item.restaurant.user_rating.aggregate_rating)
                            )}
                            <Informations>
                                <Price>
                                    <FontAwesomeIcon className="icon" icon={faUserFriends} />
                                    <p>{`${item.restaurant.currency}${item.restaurant.average_cost_for_two}`}</p>
                                </Price>
                                <Type>
                                    <p>{item.restaurant.cuisines}</p>
                                </Type>
                            </Informations>
                        </Card>
                    );
                })}
        </ListWrapper>
    );
};

export default List;
