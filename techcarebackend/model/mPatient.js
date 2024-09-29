// this will contain the schema (in what form it will store and what will be its constraint and way)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientsignup = new Schema({
    pname: {type:String},
    pemail: {type:String, unique:true},
    Ppassword:{type:String},
    Potp: {type:String}
})



const patientSchema = new mongoose.Schema({
    pname: {
      type: String,
      required: true,
      trim: true
    },
    pdateofbirth: {
      type: Date,
      required: true
    },
    paddress: {
      type: String,
      trim: true
    },
    pphoneno: {
      type: String,
      required: true,
      match: /^\+?[1-9]\d{1,14}$/,
      trim: true
    },
    pheight: {
      type: Number, // Assuming height is in centimeters
      min: 0
    },
    pweight: {
      type: Number, // Assuming weight is in kilograms
      min: 0
    },
    planguage: {
      type: String,
      trim: true
    },
    pbloodgroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    paddharno: {
      type: String,
      required: true,
      match: /^[0-9]{12}$/,
      trim: true
    }
  });
  // here patientadddapp means when patient have to fill the data to book the appointment for the doctor
const patientdddapp = mongoose.model('Patientdddapp', patientSchema);


const patientdata=mongoose.model('patientdata',patientsignup);

module.exports={patientdata,patientdddapp};