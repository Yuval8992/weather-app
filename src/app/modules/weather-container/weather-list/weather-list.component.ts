import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import { map } from 'rxjs/operators';
import { Weather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weathersForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.weathersForm = this.fb.group({
      weathers: this.fb.array([])
    })

    this.store.select('weather').pipe(map(weatherState => weatherState.weathers))
      .subscribe((weathers: Weather[]) => {
        this.weathersForm.patchValue({ weathers: weathers });
      })
    this.addWeather();
  }

  addWeather() {
    const weatherForm = this.fb.group({
      city: ['', [Validators.required]],
      unit: ['', [Validators.required]],
    });
    this.weathers.push(weatherForm);
  }

  deleteWeather(index: number) {
    this.weathers.removeAt(index);
  }

  get weathers() {
    return this.weathersForm.controls["weathers"] as FormArray;
  }
}
