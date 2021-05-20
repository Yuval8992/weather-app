import { Component, OnInit } from '@angular/core';
import { WeatherListService } from '../../../core/services/weather.service'

@Component({
  selector: 'app-weather-summarize',
  templateUrl: './weather-summarize.component.html',
  styleUrls: ['./weather-summarize.component.scss']
})
export class WeatherSummarizeComponent implements OnInit {

  constructor(private weatherListService: WeatherListService) { }

  ngOnInit(): void {
  }

  get getWeathersData() {
    return this.weatherListService.WeathersData;
  }

}
