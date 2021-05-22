import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { WeatherListService } from '../../../../core/services/weather.service'
import { Cities } from '../../../../shared/enums/cities.enum'
import { WeatherUnits } from '../../../../shared/enums/weather-units.enum'
import { ValidationService } from '../../../../shared/utils/validation/validation.service'
import { Weather } from '../../../../shared/models/weather.model'
import * as WeatherActions from '../../store/weather.actions'
import * as fromApp from '../../../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  @Input('weather') weather: FormGroup;
  @Input('index') index: number;
  @Output('onAddWeather') onAddWeather: EventEmitter<number> = new EventEmitter();
  @Output('onDeleteWeather') onDeleteWeather: EventEmitter<number> = new EventEmitter();

  cities: string[] = [];
  units: string[] = [];
  weatherIcon: string;
  weatherData: Weather;
  numOfWeathers: number;
  isLoading: boolean = false;

  constructor(private weatherListService: WeatherListService,
    private validationService: ValidationService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.cities = Object.values(Cities);
    this.units = Object.values(WeatherUnits);

    this.store.select('weather').pipe(map(weatherState => weatherState.weathers))
      .subscribe((weathers) => {
        this.numOfWeathers = weathers.length;
        this.weatherData = weathers[this.index];
      })
  }

  async addWeather() {
    if (this.weather.valid) {
      this.isLoading = true;
      const city = this.weather.value['city'];
      const unit = this.weather.value['unit'];

      const weather: Weather = await this.weatherListService.getWeatherData(city, unit);
      this.store.dispatch(new WeatherActions.AddWeather(weather));
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherData['icon']}@2x.png`;
      this.onAddWeather.emit();
      this.isLoading = false
    }
  }

  deleteWeather() {
    this.store.dispatch(new WeatherActions.DeleteWeather(this.index));
    this.onDeleteWeather.emit(this.index);
  }

  hasError(controlName: string, errorName: string) {
    return this.weather?.controls[controlName].hasError(errorName);
  }

  getErrorMessage(validatorName: string, validatorValue?: any, labelName?: string) {
    return this.validationService.getValidationErrorMessage(validatorName)
  }
}
