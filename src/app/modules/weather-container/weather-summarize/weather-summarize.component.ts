import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Weather } from 'src/app/shared/models/weather.model';

import { WeatherListService } from '../../../core/services/weather.service'
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-weather-summarize',
  templateUrl: './weather-summarize.component.html',
  styleUrls: ['./weather-summarize.component.scss']
})
export class WeatherSummarizeComponent implements OnInit {
  weatherData: Weather[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('weather').pipe(map(weatherState => weatherState.weathers))
      .subscribe((weathers) => {
        this.weatherData = weathers;
      })
  }
}
