const mongoose = require('mongoose');

const forecastSchema = new mongoose.Schema(
  {
    sunrise: { type: String },
    sunset: { type: String },
    moonrise: { type: String },
    moonset: { type: String },
    moon_phase: { type: String },
    moon_illumination: { type: Number },
    host: { type: String },
    pathname: { type: String },
    query: {
      key: { type: String },
      q: { type: String },
      days: { type: String },
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Favourites = mongoose.model('Forecasts', forecastSchema);

module.exports = Favourites;
