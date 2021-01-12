import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { SearchWrapper, Icon, Button } from './style.js';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import api from '../../core/Api';
const Search = () => {
    const history = useHistory();
    const [locate, setLocate] = useState('');
    const [search, setSearch] = useState('');
    const [data, setData] = useState(undefined);
    let options = [];
    useEffect(() => {
        setData(undefined);
        api.getCities(search).then((response) => {
            setData(response.data.location_suggestions);
        });
    }, [search]);

    data?.map((content) => {
        if (!options.some((e) => e.value === content.id)) {
            options.push({
                value: content.id,
                label: content.name
            });
        }
    });

    const searchLocate = () => {
        let path = `/restaurantes?cityId=${locate.value}`;
        history.push(path);
        location.reload();
    };

    const selectLocate = (event) => {
        setLocate(event);
    };

    const changeSearch = (event) => {
        setSearch(event);
    };

    return (
        <SearchWrapper className="search">
            <Icon>
                <FontAwesomeIcon className="mapIcon" size="1x" icon={faMapMarkerAlt} />
            </Icon>
            <Select
                className="select"
                value={locate}
                onChange={selectLocate}
                options={options}
                onInputChange={changeSearch}
                isLoading={data === undefined}
                maxMenuHeight={150}
            />
            <Button onClick={() => searchLocate()} className="buttonSearch">
                Buscar
            </Button>
        </SearchWrapper>
    );
};

export default Search;
