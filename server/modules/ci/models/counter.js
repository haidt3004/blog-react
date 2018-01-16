var mongoose = require('mongoose')
var Schema = mongoose.Schema

var counterSchema = new Schema({
  type: { type: String },
  value: { type: Number },
})

var Counter = mongoose.model('ci.counters', counterSchema)

module.exports = Counter

