import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable()
export class ApiService {

    constructor() { }

    getWeatherForecast() {
        return axios.get(`${environment.api.host}/${environment.api.endpoint.WeatherForecast}`);
    }
}