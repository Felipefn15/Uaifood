import React, { useState, useEffect } from 'react';
import { FilterWrapper, Content, Options, Option, Title } from './style.js';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import api from '../../core/Api';
import { useHistory } from 'react-router-dom';
const Filter = ({ action }) => {
    const [checks] = useState([]);
    const [cityId] = useState(window.location.href.split('?')[1].replace('cityId=', ''));
    const history = useHistory();
    const [types, setTypes] = useState(undefined);
    useEffect(() => {
        setTypes(undefined);
        api.getTypeFoods(cityId).then((response) => {
            setTypes(response.data.cuisines);
        });
    }, [cityId]);
    const options = [
        [
            {
                quantity: (
                    <p>
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </p>
                ),
                value: '-1',
                title: 'NOTA:'
            },
            {
                quantity: (
                    <p>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </p>
                ),
                value: '-2',
                title: 'NOTA:'
            },
            {
                quantity: (
                    <p>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </p>
                ),
                value: '-3',
                title: 'NOTA:'
            },
            {
                quantity: (
                    <p>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </p>
                ),
                value: '-4',
                title: 'NOTA:'
            },
            {
                quantity: (
                    <p>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </p>
                ),
                value: '-5',
                title: 'NOTA:'
            }
        ],
        [
            {
                quantity: <p>Até R$50</p>,
                value: '-50',
                title: 'CUSTO PARA 2 PESSOAS:'
            },
            {
                quantity: <p>De R$50 a R$80</p>,
                value: '-80',
                title: 'CUSTO PARA 2 PESSOAS:'
            },
            {
                quantity: <p>De R$80 a R$110</p>,
                value: '-110',
                title: 'CUSTO PARA 2 PESSOAS:'
            },
            {
                quantity: <p>Acima de R$110</p>,
                value: '-111',
                title: 'CUSTO PARA 2 PESSOAS:'
            }
        ],
        types
    ];
    const handleChange = (event) => {
        const index = checks.indexOf(event.target.value.toString());
        index > -1 ? checks.splice(index, 1) : checks.push(event.target.value);
        let star = [];
        let value = [];
        let restaurants = [];
        checks.map((item) => {
            parseInt(item, 10) > -6 && parseInt(item, 10) < 0
                ? star.push((parseInt(item, 10) * -1).toString())
                : parseInt(item, 10) < -6
                ? value.push((parseInt(item, 10) * -1).toString())
                : restaurants.push(item);
        });
        action({ star: star, value: value, restaurants: restaurants });
        let path = `/restaurantes?cityId=${cityId}`;
        history.push(path);
    };

    return (
        <FilterWrapper>
            <Content>
                {options.map((item) => {
                    if (item !== undefined)
                        return (
                            <Options key={item[0].title || 'TIPO DE COZINHA'}>
                                <Title>{item[0].title || 'TIPO DE COZINHA'}</Title>
                                {item.map((content) => {
                                    return (
                                        <Option key={content.value || content.cuisine.cuisine_id}>
                                            <Checkbox
                                                checked={checks.includes(
                                                    content.value ||
                                                        content.cuisine.cuisine_id.toString()
                                                )}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                value={content.value || content.cuisine.cuisine_id}
                                            />
                                            {content.quantity || content.cuisine.cuisine_name}
                                        </Option>
                                    );
                                })}
                            </Options>
                        );
                })}
            </Content>
        </FilterWrapper>
    );
};

export default Filter;
