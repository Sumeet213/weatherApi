const axios = require('axios');
var url = require('url');
const Responder = require('../service/response');
const Weathers = require('../models/weather');
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  async checkWeather(req, res) {
    try {
      let city = req.body.cityName;
      let URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`;
      let weatherAPI = await axios.get(`${URL}`);
      var url_parts = url.parse(URL, true);
      if (weatherAPI && weatherAPI.status === 200) {
        let newWeather = await new Weathers({
          name: weatherAPI.data?.location?.name,
          region: weatherAPI.data?.location?.region,
          country: weatherAPI.data?.location?.country,
          lat: weatherAPI.data?.location?.lat,
          lon: weatherAPI.data?.location?.lon,
          tz_id: weatherAPI.data?.location?.tz_id,
          localtime_epoch: weatherAPI.data?.location?.localtime_epoch,
          localtime: weatherAPI.data?.location?.localtime
            ? new Date(weatherAPI.data?.location?.localtime)
            : undefined,
          host: url_parts.host,
          pathname: url_parts.pathname,
          query: url_parts.query,
        }).save();

        return Responder.respondWithSuccess(
          req,
          res,
          newWeather,
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
