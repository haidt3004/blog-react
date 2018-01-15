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
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  relationship: { type: String },
},{ _id : false })

var preCarerSchema = new Schema({
  organisation: Schema.Types.ObjectId,  // from organisations._id
  preCarerType: { type: String, enum:['Qualified', 'Unqualified']},
  // qualifications...
  // certificates...
  classified: { type: String, enum:['Pre-carer', 'Carer']},

  workExperience: [{
    status: { type: String, enum:['Current', 'Past']},
    companyName: { type: String },
    companyLocation: { type: String },
    jobTitle: { type: String },
    commenceDate: { type: Date },
    endDate: { type: Date },
    duties: { type: String },
  }],
  // currentEmployment: last item of workExperience

  education: { type: String },
  referees: { type: String },
  // services(carerSkills)...
  resumeUrl: { type: String },
  coverLetterUrl: { type: String },
  availibility: { type: Date },
  videoUrl: { type: String },
  jobType: { type: String, enum:['Full-time', 'Part-time ', 'Casual']},
  profileComplStatus: { type: Number },
  trainingComplStatus: { type: Number },
  trainingHistory: [Schema.Types.ObjectId],  // from trainingPrograms._id
  invitations: [Schema.Types.ObjectId],  // from invitations._id
},{ _id : false })

var carerSchema = new Schema({
  carerType: { type: String, enum:['Existing carer', 'New Carer', 'Health Professional']},
  availibility: { type: String, enum:['Full-time', 'Part-time ', 'Casual'] },
  commenceDate: { type: Date },
  endDate: { type: Date },
  organisations: [Schema.Types.ObjectId],  // from organisations._id
  seekers: [Schema.Types.ObjectId],  // from users._id
  status: { type: String, enum:['Active', 'Inactive', 'Other']},
},{ _id : false })

var seekerSchema = new Schema({
  seekerType: { type: String, enum:['Individual with need', 'Parent/ Guardian', 'Child of Elderly Parent', 'Advocate', 'Plan Manager']},
  description: { type: String, maxlength: 10000 },
  registrationPerson: contactPersonSchema,
  priContactPerson: { type: String, enum:['Care Seeker', 'Emergency Contact Person', 'Registration Person', 'Other'] },
  secContactPerson: { type: String, enum:['Care Seeker', 'Emergency Contact Person', 'Registration Person', 'Other'] },
  priContactMethod: { type: String, enum:['Call', 'SMS', 'Email Address'] },
  payType: { type: String, enum:['Weekly', 'Fornightly'] },
  // carerHistory...
  carer: Schema.Types.ObjectId,  // from users._id
  comment: { type: String }
},{ _id : false })

var staffSchema = new Schema({
  organisation: Schema.Types.ObjectId,  // from organisations._id
  jobTitle: { type: String },
  status: { type: String, enum:['Active', 'Inactive', 'Other']},
  jobDesc: { type: String, maxlength: 10000 },
},{ _id : false })

var ciStaffSchema = new Schema({
  staffType: { type: String, enum:['System administrator', 'Adminstrator'] },
  staffNo: { type: Number }
},{ _id : false })

var organisationSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  companyName: { type: String },
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
}, { _id: false })

var userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  email: { type: String },
  password: { type: String, required: true }, // encrypted
  // photoURL: { type: String },
  // description: { type: String, maxlength: 10000 },
  // title: { type: String, enum:['Miss', 'Mrs', 'Ms', 'Mr', 'Other'] },
  // firstName: { type: String, maxlength: 400 },
  // midName...
  // lastName: { type: String, maxlength: 400 },
  // address: { type: addressSchema, default: null },
  // phone: { type: String },
  // mobile: { type: String },
  // dob: { type: Date },
  // gender: { type: String },
  // emergContactPerson: { type: contactPersonSchema, default: null },
  status: { type: String, enum:['Pending', 'Active', 'Inactive']},
  userType: { type: String, enum:['organisation', 'staff', 'admin', 'precarer', 'carer', 'seeker'] },
  preCarerProfile: { type: preCarerSchema, default: null },
  carerProfile: { type: carerSchema, default: null },
  seekerProfile: { type: seekerSchema, default: null },
  staffProfile: { type: staffSchema, default: null },
  ciStaffProfile: { type: ciStaffSchema, default: null },
  organisationProfile: { type: organisationSchema, default: null },
}, { timestamps: true })

var User = mongoose.model('common.users', userSchema)

module.exports = User

