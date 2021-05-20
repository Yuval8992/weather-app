import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherListService } from '../../../core/services/weather.service'

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weathersForm: FormGroup;

  constructor(private fb: FormBuilder, private weatherListService: WeatherListService) { }

  ngOnInit(): void {
    this.weathersForm = this.fb.group({
      weathers: this.fb.array([])
    })
    this.addWeather('', '', 0);
    this.weatherListService.addWeatherSubject?.subscribe((data) => this.addWeather(data.city, data.unit, data.index))
    this.weatherListService.deleteWeatherSubject?.subscribe((index) => this.deleteWeather(index))
  }

  addWeather(city: string, unit: string, index: number) {
    const weatherForm = this.fb.group({
      city: ['', [Validators.required]],
      unit: ['', [Validators.required]]
    });

    console.log(this.weatherListService);

    this.weathers.controls.splice(index + 1, 0, weatherForm);
    index > 0 ? this.weatherListService.getWeatherData(city, unit) : '';
  }

  deleteWeather(index: number) {
    this.weathers.removeAt(index);
  }

  get weathers() {
    return this.weathersForm.controls["weathers"] as FormArray;
  }
}
