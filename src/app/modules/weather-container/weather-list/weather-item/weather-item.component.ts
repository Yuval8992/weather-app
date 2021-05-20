import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherListService } from '../../../../core/services/weather.service'
import { Cities } from '../../../../shared/enums/cities.enum'
import { WeatherUnits } from '../../../../shared/enums/weather-units.enum'
import { WeatherData } from 'src/app/shared/models/weather-data.model';
import { ValidationService } from '../../../../shared/utils/validation/validation.service'

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  @Input('weather') weather: FormGroup;
  @Input('index') index: number;

  weatherData: WeatherData;
  cities: string[] = [];
  units: string[] = [];
  weatherIcon: string;
  isLoading: boolean = false;

  constructor(private weatherListService: WeatherListService, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.cities = Object.values(Cities);
    this.units = Object.values(WeatherUnits)
  }

  async onAddWeather() {
    if (this.weather.valid) {
      this.isLoading = true;
      const city = this.weather.value['city'];
      const unit = this.weather.value['unit'];
      this.weatherListService.addWeatherSubject.next({
        city,
        unit,
        index: this.index
      });

      this.weatherData = await this.weatherListService.getWeatherData(city, unit);

      this.weatherListService.addSummarizeRow(this.weatherData, this.index)
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherData['icon']}@2x.png`
      this.isLoading = false
    }
  }

  onDeleteWeather() {
    this.weatherListService.deleteWeatherSubject.next(this.index);
    this.weatherListService.deleteSummarizeRow(this.index)
  }

  hasError(controlName: string, errorName: string) {
    return this.weather?.controls[controlName].hasError(errorName);
  }

  getErrorMessage(validatorName: string, validatorValue?: any, labelName?: string) {
    return this.validationService.getValidationErrorMessage(validatorName)
  }

  get getNumOfWheathers() {
    return this.weatherListService.WeathersData?.length;
  }
}
