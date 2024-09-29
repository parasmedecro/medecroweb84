const express=require('express');
const router=express.Router();
const hospital=require('../controller/cHospitaldata')

router.post('/hospitalsignup',hospital.savehospitaldata);
router.post('/verify-otp',hospital.verifyOTP)
router.post('/loginhospital',hospital.loginhospital)
router.post('/searchhospital',hospital.findNearbyHospitals)
router.post('/nearbyhospital',hospital.nearbysearchhospital)
router.post('/savehospitalreg',hospital.savehospitalregistrationdata)
router.get('/hospitalinfo',hospital.getHospitals)
router.post('/doctorlist',hospital.listofdoctors)
router.post('/gethospitalbyemail',hospital.gethospitalsbyemail)


module.exports=router;