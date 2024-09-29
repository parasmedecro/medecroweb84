// This will contain all the api for patient whether it is for sign in sign up or any process
const {patientdata,patientdddapp} = require('../model/mPatient');
const nodemailer = require('nodemailer');

const crypto = require('crypto')


// // here we are exporting the data for the api to save to the database
// exports.savepatientdata = async (req, res) => {

//     try {

//         // first checking the uniqness of email so, that very patient has uniqueness
//         const currentdata = { ...req.body };
//         console.log(currentdata)

//         const user = await patientdata.findOne({ pemail: currentdata.pemail });
//         console.log(user)
//         if (user) {
//             return res.status(400).json({ message: "user already exist" })
//         }


//         const newpatient = new patientdata({
//             pname: req.body.pname,
//             pemail: req.body.pemail,
//             Ppassword: req.body.Ppassword,
//             Potp: req.body.Potp
//         })


//         // this save the data into mongodb database and also send promise which contain entry (containg all the data send by the patient and some auto generated data such as id ,object id and err which is any error cominng during the uplodation)
//         const entry = await newpatient.save();
//         res.json({ success: true, entry });
//         }catch { ((err) => res.json({ success: false, err })) }


// Function to generate a 6-digit OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'techcare.services1@gmail.com', // Replace with your email
        pass: 'nfac hmlr wpld mziv',        // Replace with your email password
    },
});

// Function to send OTP email
const sendOtpEmail = async (email, otp) => {
    const mailOptions = {
        from: 'techcare.services1@gmail.com', // Replace with your email
        to: email,
        subject: 'Congratulations ',
        text: `Your OTP for signup is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Failed to send OTP');
    }
};









// }

// Exporting the data for the API to save to the database
exports.savepatientdata = async (req, res) => {
    try {
        // Extract data from the request body
        const { pname, pemail, Ppassword, Potp } = req.body;

        // Log the incoming data for debugging
        console.log({ pname, pemail, Ppassword, Potp });
        // this is for email pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(pemail)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // First, check the uniqueness of the email to ensure every patient is unique
        const user = await patientdata.findOne({ pemail });
        console.log(user);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const otp = generateOTP();

        // send otp email
        await sendOtpEmail(pemail, otp)


        // Create a new patient entry if the email is unique
        const newpatient = new patientdata({
            pname,
            pemail,
            Ppassword,
            Potp: otp
        });

        // Save the new patient to the database
        const entry = await newpatient.save();
        res.status(200).json({ success: true, message: "OTP Sent Successfully", entry });

    } catch (err) {
        // If any error occurs, respond with the error
        console.error('Error saving patient data:', err);
        res.status(500).json({ success: false, message: "Failed to send otp", error: err.message });
    }
};

// Verify OTP and complete hospital registration
exports.verifyOTP = async (req, res) => {
    const { pemail, Potp, pname, Ppassword } = req.body;

    try {
        // Find the user by email and OTP
        const user = await patientdata.findOne({ pemail, Potp });

        if (!user) {
            return res.status(400).json({ message: 'Invalid OTP or email' });
        }

        // Update user details if OTP is correct
        user.pname = pname;
        user.Ppassword = Ppassword;
        user.Potp = ''; // Clear OTP after successful verification

        await user.save();
        res.status(200).json({ message: 'Signup successful!' });

    } catch (err) {
        console.error('Error verifying OTP:', err);
        res.status(500).json({ message: 'Failed to verify OTP', error: err.message });
    }
};



exports.loginpatient = async (req, res) => {
    // first getting data from the body
    try {
        const { pemail, Ppassword } = req.body;
        // this is for email pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(pemail)) {
            return res.status(400).json({ message: 'Invalid email format' });
        } //

         // Password pattern validation
         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         if (!passwordPattern.test(Ppassword)) {
             return res.status(400).json({ message: 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.' });
         }

        // taking the data of the patient on the basis of email

        const user = await patientdata.findOne({ pemail });
        console.log(user)
        if (pemail===user.pemail && Ppassword===user.Ppassword){
            res.status(200).json({message:'Sign IN Successful'})
        }
        else{
            res.status(401).json({message:'Invalid email or password'});
        }
    } catch {
        res.status(500).json({message:'Wrong attempts'})

    }






}

// api for the save the data entered by the patinet during booking of the doctor appointment
exports.savepatdddapp=async (req,res)=>{
    try{
    const {pname,pdateofbirth,paddress,pphoneno,pheight,pweight,planguage,pbloodgroup,paddharno}=req.body

    const newpatientdddapp=new patientdddapp({
        pname,pdateofbirth,paddress,pphoneno,pheight,pweight,planguage,pbloodgroup,paddharno

    })

    const entry=await newpatientdddapp.save();

    res.status(201).json({message:'patient appointment with the doctor has booked',entry});

}catch(error){
    console.error('Error in  saving data please try again',error);
    res.status(500).json({message:'Failed to  save  the data please try again',error});

}
}

