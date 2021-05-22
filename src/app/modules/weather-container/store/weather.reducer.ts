import { Weather } from '../../../shared/models/weather.model'

import * as WeatherActions from './weather.actions';

export interface State {
  weathers: Weather[];
}

const initialState: State = {
  weathers: []
};

export function weatherReducer(
  state: State = initialState,
  action: WeatherActions.WeatherActions
) {
  switch (action.type) {
    case WeatherActions.ADD_WEATHER:
      return {
        ...state,
        weathers: [...state.weathers, action.payload]
      };
    case WeatherActions.DELETE_WEATHER:
      return {
        ...state,
        weathers: state.weathers.filter((el, index) => index !== action.payload)
      };

    default:
      return state;
  }
}
