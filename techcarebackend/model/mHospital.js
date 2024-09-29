const mongoose=require('mongoose')
const {Schema}=mongoose;

const Hospitalsignup=new Schema(
    {
        hname:{type:String},
        hemail:{type:String,unique:true},
        hPassword:{type:String },
        hotp:{type:String }

})

const hospitaldata=mongoose.model('hospitaldata',Hospitalsignup)






//information of hospital



const bedDetailSchema = new mongoose.Schema({
    bedType: { type: String, required: true },
    totalBeds: { type: Number, required: true }
});

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    availability: { type: String, required: true },
    contactInfo: { type: String, required: true }
});

const hospitalSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    hospitalType: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    administratorName: { type: String, required: true },
    adminContactNumber: { type: String, required: true },
    adminEmail: { type: String, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    bedDetails: [bedDetailSchema],
    doctors: [doctorSchema],
    services: { type: String, required: true },
    visitingHours: { type: String, required: true },
    parkingAvailability: { type: Boolean, default: false },
    otherFacilities: { type: String },
    appointmentSlots: { type: String },
    appointmentTypes: { type: String },
    cancellationPolicy: { type: String },
    insuranceInfo: { type: String },
    paymentOptions: { type: String },
    telemedicineCapabilities: { type: Boolean, default: false },
    accreditation: { type: String },
    insuranceCertificates: { type: String },
    termsAgreement: { type: Boolean, default: false },
}, { collection: 'hospitalregistration' });

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = {
    Hospital,
    hospitaldata
}
