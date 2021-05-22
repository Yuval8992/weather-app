import { ActionReducerMap } from '@ngrx/store';

import * as fromWeather from '../modules/weather-container/store/weather.reducer';

export interface AppState {
  weather: fromWeather.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  weather: fromWeather.weatherReducer
};
