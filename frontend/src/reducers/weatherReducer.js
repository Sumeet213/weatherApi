import {
  GET_WEATHER,
  WEATHER_RESULT,
  WEATHER_ERROR,
  ADD_WEATHER_RESULT,
  ADD_WEATHER,
} from '../constants/weatherConstant';

let initialState = {
  weatherData: [],
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        loading: true,
        weatherData: [],
        error: null,
      };
    case ADD_WEATHER:
      return {
        ...state,
        loading: false,
        weatherData: state.weatherData,
        error: null,
      };
    case WEATHER_RESULT:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null,
      };
    case ADD_WEATHER_RESULT:
      return {
        ...state,
        loading: false,
        weatherData:
          state.weatherData.length > 0
            ? [...state.weatherData, action.payload]
            : [action.payload],
        error: null,
      };
    case WEATHER_ERROR:
      return {
        ...state,
        weatherData: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
