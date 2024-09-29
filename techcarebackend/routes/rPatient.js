const express=require('express');
const router=express.Router();
const patient=require('../controller/cPatientdata')

// creating api to post the patient data to database

router.post('/patientsignup',patient.savepatientdata);
router.post('/verify-otp',patient.verifyOTP)
router.post('/loginpatient',patient.loginpatient)


module.exports=router;

