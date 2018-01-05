var mongoose = require('mongoose')
var Schema = mongoose.Schema

var addressSchema = new Schema({
  unit: { type: Number },
  streetNumber: { type: Number },
  streetName: { type: String, maxlength: 400 },
  suburb: { type: String, maxlength: 400 },
  // city...
  state: { type: String, enum:['Queensland', 'New South Wales', 'Victoria', 'South Australia', 'Western Australia', 'Northern Australia Territory', 'Tasmania ', 'Australian Capital Territory'] },
  postcode: { type: String },
  country: { type: String },
},{ _id : false })

var contactPersonSchema = new Schema({
  title: { type: String, enum:['Miss', 'Mrs', 'Ms', 'Mr', 'Other'] },
  firstName: { type: String, maxlength: 400 },
  // midName...
  lastName: { type: String, maxlength: 400 },
  phone: { type: String },
  mobile: { type: String },
  email: { type: String },
},{ _id : false })

var organisationSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  logo: { type: String },
  category: { type: String, enum:['Carer Organisation', 'Employment Services Organisation', 'Registered Training Organisation', 'Government Organisation'] },
  description: { type: String, maxlength: 10000 },
  address: { type: addressSchema, default: null },
  phone: { type: String },
  fax: { type: String },
  email: { type: String },
  website: { type: String },
  abn: { type: Number },
  contactPerson: { type: contactPersonSchema, default: null },
}, { timestamps: true })

var User = mongoose.model('organisations', organisationSchema)

module.exports = User

