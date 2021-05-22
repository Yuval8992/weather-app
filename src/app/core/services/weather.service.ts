import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Weather } from '../../shared/models/weather.model'

@Injectable({
    providedIn: 'root',
})
export class WeatherListService {
    baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(private http: HttpClient) {
    }

    getWeatherData(city: string, unit: string) {
        const res: Observable<Weather> = this.http.get(`${this.baseUrl}?appid=${environment.api_key}&q=${city}&units=${unit}`)
            .pipe(map((responseData) => {
                const { description, icon } = responseData['weather'][0];
                const { temp, temp_max, temp_min, feels_like } = responseData['main'];
                return { temp, temp_max, temp_min, feels_like, description, icon, city, unit }
            }))

        return res.toPromise();
    }
}