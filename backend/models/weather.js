const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    region: { type: String, required: false },
    country: { type: String, required: false },
    lat: { type: Number, required: false },
    lon: { type: Number, required: false },
    tz_id: { type: String, required: false },
    localtime_epoch: { type: Number, required: false },
    localtime: { type: Date, required: false },
    host: { type: String },
    pathname: { type: String },
    query: {
      key: { type: String },
      q: { type: String },
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

const Weathers = mongoose.model('Weathers', weatherSchema);

module.exports = Weathers;
