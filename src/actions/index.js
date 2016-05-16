import axios from 'axios';

const API_KEY = "3bdae79e22238b7680b49bab293b7bb9";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWether(city) {
    const url = `${ ROOT_URL }&q=${ city },us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}