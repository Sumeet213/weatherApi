const express = require('express');
const router = express.Router();
const Responder = require('../service/response');
const checkWeather = require('../controller/weather');
const checkForecasts = require('../controller/forecast');
const MapperController = require('../controller/mapper');

router.post('/weather/add', checkWeather.checkWeather);

router.post('/forecast/add', checkForecasts.addForecasts);

router.post('/add-mapper', MapperController.addMapperData);

router.get('/get-mapper', MapperController.getMapperData);

module.exports = router;
