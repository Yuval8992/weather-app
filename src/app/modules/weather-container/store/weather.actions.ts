import { Action } from '@ngrx/store';
import { Weather } from '../../../shared/models/weather.model'

export const ADD_WEATHER = 'ADD_WEATHER';
export const DELETE_WEATHER = 'DELETE_WEATHER';

export class AddWeather implements Action {
  readonly type = ADD_WEATHER;

  constructor(public payload: Weather) { }
}

export class DeleteWeather implements Action {
  readonly type = DELETE_WEATHER;

  constructor(public payload: number) { }
}

export type WeatherActions = AddWeather | DeleteWeather;