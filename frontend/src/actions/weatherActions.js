import {
  GET_WEATHER,
  SET_LOADING,
  WEATHER_RESULT,
  WEATHER_ERROR,
  END_LOADING,
  ADD_WEATHER_RESULT,
  ADD_WEATHER,
} from '../constants/weatherConstant';
export const addWeather = (payload) => {
  return {
    type: ADD_WEATHER,
    payload,
  };
};

export const weatherResult = (payload) => {
  return {
    type: WEATHER_RESULT,
    payload,
  };
};
export const addWeatherResult = (payload) => {
  return {
    type: ADD_WEATHER_RESULT,
    payload,
  };
};

export const getWeather = () => {
  return {
    type: GET_WEATHER,
  };
};

export const weatherError = (payload) => {
  return {
    type: WEATHER_ERROR,
    payload,
  };
};
