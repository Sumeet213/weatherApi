const axios = require('axios');
var url = require('url');
const Responder = require('../service/response');
const Mappers = require('../models/mapper');

module.exports = {
  async addMapperData(req, res) {
    try {
      let mapperData = await Mappers.findOne({});
      if (mapperData) {
        mapperData.name = req.body.name;
        mapperData.region = req.body.region;
        mapperData.country = req.body.country;
        mapperData.lat = req.body.lat;
        mapperData.lon = req.body.lon;
        mapperData.tz_id = req.body.tz_id;
        mapperData.localtime_epoch = req.body.localtime_epoch;
        mapperData.localtime = req.body.localtime;

        // forecast keys
        mapperData.sunrise = req.body.sunrise;
        mapperData.sunset = req.body.sunset;
        mapperData.moonrise = req.body.moonrise;
        mapperData.moonset = req.body.moonset;
        mapperData.moon_phase = req.body.moon_phase;
        mapperData.moon_illumination = req.body.moon_illumination;

        await mapperData.save();
      } else {
        mapperData = await new Mappers({
          ...req.body,
        }).save();
      }

      return Responder.respondWithSuccess(
        req,
        res,
        mapperData,
        'Successfully Fetched!'
      );
    } catch (err) {
      console.log(err);
      return Responder.respondWithError(req, res, 'Error');
    }
  },

  async getMapperData(req, res) {
    try {
      let mapperData = await Mappers.findOne({});

      return Responder.respondWithSuccess(
        req,
        res,
        mapperData,
        'Successfully Fetched!'
      );
    } catch (err) {
      console.log(err);
      return Responder.respondWithError(req, res, 'Error');
    }
  },
};
