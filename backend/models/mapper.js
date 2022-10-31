const mongoose = require('mongoose');

const mapperSchema = new mongoose.Schema(
  {
    // weather keys
    name: { type: String },
    region: { type: String },
    country: { type: String },
    lat: { type: String },
    lon: { type: String },
    tz_id: { type: String },
    localtime_epoch: { type: String },
    localtime: { type: String },

    // forecast keys
    sunrise: { type: String },
    sunset: { type: String },
    moonrise: { type: String },
    moonset: { type: String },
    moon_phase: { type: String },
    moon_illumination: { type: String },
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

const Mappers = mongoose.model('Mappers', mapperSchema);

module.exports = Mappers;
