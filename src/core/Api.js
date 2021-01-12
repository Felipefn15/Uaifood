import axios from 'axios';

import appConfig from './appConfig';

export default class Api {
    static getRequest(url) {
        return axios.get(url, { headers: { 'user-key': '9e422e2c3ef5d7aaf7fa2fa090187915' } });
    }

    static postRequest(url) {
        return axios.post(url);
    }

    static getCities(value) {
        return Api.getRequest(`${appConfig.apiUrl}/cities?q=${value}`);
    }

    static getTypeFoods(cityId) {
        return Api.getRequest(`${appConfig.apiUrl}/cuisines?city_id=${cityId}`);
    }

    static getRestaurants(cityId, cuisines) {
        return Api.getRequest(
            `${appConfig.apiUrl}/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisines}`
        );
    }
}
