const axios = require('axios');
var url = require('url');
const Responder = require('../service/response');
const Forecasts = require('../models/forecast');
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  async addForecasts(req, res) {
    try {
      let city = req.body.cityName;
      let URL = `http://api.weatherapi.com/v1/forecast.json?key=a017e6bb457a459da03122140223010&q=${city}&days=1&aqi=no&alerts=no`;
      let checkForecast = await axios.get(`${URL}`);
      console.log('checkForecast.data', checkForecast.data);
      var url_parts = url.parse(URL, true);
      if (checkForecast.status === 200) {
        let newForecast = await new Forecasts({
          sunrise: checkForecast.data?.forecast?.forecastday[0].astro.sunrise,
          sunset: checkForecast.data?.forecast?.forecastday[0].astro.sunset,
          moonrise: checkForecast.data?.forecast?.forecastday[0].astro.moonrise,
          moonset: checkForecast.data?.forecast?.forecastday[0].astro.moonset,
          moon_phase:
            checkForecast.data?.forecast?.forecastday[0].astro.moon_phase,
          moon_illumination:
            checkForecast.data?.forecast?.forecastday[0].astro
              .moon_illumination,
          host: url_parts.host,
          pathname: url_parts.pathname,
          query: url_parts.query,
        }).save();
        return Responder.respondWithSuccess(
          req,
          res,
          newForecast,
          'Successfully Added'
        );
      }

      return Responder.respondWithSuccess(req, res, [], 'No Response');
    } catch (err) {
      console.log(err);
      return Responder.respondWithError(req, res, 'Error');
    }
  },
};
