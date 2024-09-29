// const hospitaldata = require('../model/mHospital');
// const nodemailer = require('nodemailer');

// const crypto = require('crypto')

// // Function to generate a 6-digit OTP
// const generateOTP = () => {
//     return crypto.randomInt(100000, 999999).toString();
// };

// // Nodemailer setup for sending emails
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'techcare.services1@gmail.com', // Replace with your email
//         pass: 'nfac hmlr wpld mziv',        // Replace with your email password
//     },
// });

// // Function to send OTP email
// const sendOtpEmail = async (email, otp) => {
//     const mailOptions = {
//         from: 'techcare.services1@gmail.com', // Replace with your email
//         to: email,
//         subject: 'Your OTP for Signup',
//         text: `Your OTP for signup is: ${otp}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('OTP sent successfully');
//     } catch (error) {
//         console.error('Error sending OTP email:', error);
//         throw new Error('Failed to send OTP');
//     }
// };


// exports.savehospitaldata = async (req, res) => {
//     try {
//         // Extract data from the request body
//         const { hname, hemail, hPassword, hotp } = req.body;
//         // Basic email pattern validation
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(hemail)) {
//             return res.status(400).json({ message: 'Invalid email format' });
//         } //

//         // Password pattern validation
//         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordPattern.test(hPassword)) {
//             return res.status(400).json({ message: 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.' });
//         }




//         // First, check the uniqueness of the email to ensure every patient is unique
//         const user = await hospitaldata.findOne({ hemail });
//         console.log(user);
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }
//         // Generate Otp

//         const otp = generateOTP();

//         // send otp email
//         await sendOtpEmail(hemail, otp)

//         // Create a new patient entry if the email is unique
//         const newhospital = new hospitaldata({
//             hname, //leave other fields blank for now
//             hemail,
//             hPassword,
//             hotp: otp  //store the otp temporarily
//         });

//         // Save the new patient to the database
//         const entry = await newhospital.save();
//         res.status(200).json({ success: true, message: "OTP SENT SUCCESSFULLY", entry });

//     } catch (err) {
//         // If any error occurs, respond with the error
//         console.error('Error saving patient data:', err);
//         res.status(500).json({ success: false, message: "Failed to send otp", error: err.message });
//     }
// };


// // Verify OTP and complete hospital registration
// exports.verifyOTP = async (req, res) => {
//     const { hemail, hotp, hname, hPassword } = req.body;

//     try {
//         // Find the user by email and OTP
//         const user = await hospitaldata.findOne({ hemail, hotp });

//         if (!user) {
//             return res.status(400).json({ message: 'Invalid OTP or email' });
//         }

//         // Update user details if OTP is correct
//         user.hname = hname;
//         user.hPassword = hPassword;
//         user.hotp = ''; // Clear OTP after successful verification

//         await user.save();
//         res.status(200).json({ message: 'Signup successful!' });

//     } catch (err) {
//         console.error('Error verifying OTP:', err);
//         res.status(500).json({ message: 'Failed to verify OTP', error: err.message });
//     }
// };

// // exports.loginhospital = async (req, res) => {

// //     try {
// //         const { hemail, hPassword } = req.body;
// //         // this is for email pattern
// //         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //         if (!emailPattern.test(hemail)) {
// //             return res.status(400).json({ message: 'Invalid email format' });
// //         } //

// //         // taking the data of the patient on the basis of email

// //         const user = await hospitaldata.findOne({ hemail });
// //         console.log(user)
// //         if (hemail === user.hemail && hPassword === user.hPassword) {
// //             res.status(200).json({ message: 'Sign IN Successful' })
// //         }
// //         else {
// //             res.status(401).json({ message: 'Invalid email or password' });
// //         }
// //     } catch {
// //         res.status(500).json({ message: 'Wrong attempts' })

// //     }

// // } // first getting data from the body


// exports.loginhospital = async (req, res) => {
//     try {
//         const { hemail, hPassword } = req.body;

//         // Validate email pattern
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(hemail)) {
//             return res.status(400).json({ message: 'Invalid email format' });
//         }

//         // Find the user by email
//         const user = await hospitaldata.findOne({ hemail });

//         // Check if user exists
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Compare password (assuming plain text for now, but should be hashed)
//         if (hPassword === user.hPassword) {
//             res.status(200).json({ message: 'Sign IN Successful' });
//         } else {
//             res.status(401).json({ message: 'Invalid email or password' });
//         }
//     } catch (err) {
//         console.error('Error during login:', err);
//         res.status(500).json({ message: 'Wrong attempts', error: err.message });
//     }
// };

const axios = require('axios');

const { Hospital, hospitaldata } = require('../model/mHospital');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Function to generate a 6-digit OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'techcare.services1@gmail.com', // Replace with your email
        // pass: 'nfac hmlr wpld mziv',        // Replace with your email password
        user:'2024sihpublic@gmail.com',
        pass:'entx plrf anhy essh'
    },
});

// Function to send OTP email
const sendOtpEmail = async (email, otp) => {
    const mailOptions = {
        from: '2024sihpublic@gmail.com', // Replace with your email
        to: email,
        subject: ' Regarding Sign up OTP',
        text: `Your OTP is ${otp}`,
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Failed to send OTP');
    }
};

exports.savehospitaldata = async (req, res) => {
    try {
        const { hname, hemail, hPassword, hotp } = req.body;

        // Basic email pattern validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(hemail)) {
            return res.status(400).json({ message: 'Invalid email format', field: 'email' });
        }

        // // Password pattern validation
        // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // if (!passwordPattern.test(hPassword)) {
        //     return res.status(422).json({ message: 'Invalid password format', field: 'password' });
        // }

        // Check if user exists by email
        const user = await hospitaldata.findOne({ hemail });
        if (user) {
            return res.status(409).json({ message: "User already exists", field: 'email' });
        }

        // Generate OTP and send email
        const otp = generateOTP();
        await sendOtpEmail(hemail, otp);

        // Create new hospital entry
        const newhospital = new hospitaldata({
            hname,
            hemail,
            hPassword,
            hotp: otp
        });

        const entry = await newhospital.save();
        res.status(200).json({ success: true, message: "OTP sent successfully", entry });

    } catch (err) {
        console.error('Error saving hospital data:', err);
        res.status(500).json({ success: false, message: "Failed to send OTP", error: err.message });
    }
};


// Verify OTP and complete hospital registration
exports.verifyOTP = async (req, res) => {
    const { hemail, hotp, hname, hPassword } = req.body;

    try {
        // Find the user by email and OTP
        const user = await hospitaldata.findOne({ hemail, hotp });

        if (!user) {
            return res.status(400).json({ message: 'Invalid OTP or email' });
        }

        // Update user details if OTP is correct
        user.hname = hname;
        user.hPassword = hPassword;
        user.hotp = ''; // Clear OTP after successful verification

        await user.save();
        res.status(200).json({ message: 'Signup successful!' });

    } catch (err) {
        console.error('Error verifying OTP:', err);
        res.status(500).json({ message: 'Failed to verify OTP', error: err.message });
    }
};

// Login function for hospital
exports.loginhospital = async (req, res) => {
    try {
        const { hemail, hPassword } = req.body;

        // Validate email pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(hemail)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Find the user by email
        const user = await hospitaldata.findOne({ hemail });

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare password (assuming plain text for now, but should be hashed)
        if (hPassword === user.hPassword) {
            res.status(200).json({ message: 'Sign IN Successful' });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Error during login', error: err.message });
    }
};



// Function to calculate the distance between two latitude and longitude points using Haversine formula
function haversineDistance(lat1, lon1, lat2, lon2) {
    const toRad = x => (x * Math.PI) / 180;

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to find nearby hospitals
exports.findNearbyHospitals = async (userLatitude, userLongitude) => {
    try {
        // Get all hospitals
        const hospitals = await Hospital.find();

        // Map hospitals and get their distances asynchronously
        const nearbyHospitals = await Promise.all(hospitals.map(async (hospital) => {
            // Create the hospital address string
            const haddress = [hospital.address, hospital.city, hospital.state, hospital.zipCode].join(',');

            // Call the OpenCage API to get the hospital's latitude and longitude
            const apiKey = 'f0905f30abbb4363a7c502bc3a67f41d';  // Replace with your OpenCage API key
            const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
                params: {
                    q: haddress,
                    key: apiKey
                }
            });

            // If results are found, calculate the distance
            if (response.data.results && response.data.results.length > 0) {
                const { lat, lng } = response.data.results[0].geometry;
                const distance = haversineDistance(userLatitude, userLongitude, lat, lng);

                // Add the distance to the hospital object
                return {
                    ...hospital._doc,  // _doc is used to extract the original data of the Mongoose document
                    distance
                };
            } else {
                console.error('No results found for', haddress);
                return null;
            }
        }));

        // Filter out any null results (hospitals where no geolocation was found)
        const validNearbyHospitals = nearbyHospitals.filter(hospital => hospital !== null);
        // console.log(validNearbyHospitals)

        // Return or send the filtered hospitals to the frontend
        return validNearbyHospitals;

    } catch (error) {
        console.error('Error finding nearby hospitals:', error);
        throw error;  // You can handle the error in the calling function or middleware
    }
};



exports.nearbysearchhospital = async (req, res) => {
    const { userLatitude: latitude, userLongitude: longitude } = req.body;
    console.log({ latitude, longitude });
    try {
        if (!latitude || !longitude) {
            console.log("data is not coming from longitude or latitude")
            return res.status(400).json({ message: 'Latitude and Longitude are required' });

        }

        const hospitals = await exports.findNearbyHospitals(parseFloat(latitude), parseFloat(longitude));
        res.status(200).json(hospitals);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to retrieve nearby hospitals', error: error.message });
    }
};


exports.savehospitalregistrationdata = async (req, res) => {
    try {
        const {
            hospitalName, address, city, state, zipCode, contactNumber, email,
            hospitalType, registrationNumber, administratorName, adminContactNumber,
            adminEmail, bedDetails, doctors, services, visitingHours, parkingAvailability,
            otherFacilities, appointmentSlots, appointmentTypes, cancellationPolicy,
            insuranceInfo, paymentOptions, telemedicineCapabilities, accreditation,
            insuranceCertificates, termsAgreement
        } = req.body;

        // Create new hospital instance
        const newHospitaldata = new Hospital({
            hospitalName, address, city, state, zipCode, contactNumber, email,
            hospitalType, registrationNumber, administratorName, adminContactNumber,
            adminEmail, bedDetails, doctors, services, visitingHours, parkingAvailability,
            otherFacilities, appointmentSlots, appointmentTypes, cancellationPolicy,
            insuranceInfo, paymentOptions, telemedicineCapabilities, accreditation,
            insuranceCertificates, termsAgreement
        });

        // Save to the database
        const entry = await newHospitaldata.save();

        res.status(201).json({ message: 'Hospital registered successfully', entry });
    } catch (error) {
        console.error('Error saving hospital data:', error);
        res.status(500).json({ message: 'Failed to save hospital data', error });
    }
};

exports.getHospitals = async (req, res) => {
    try {
        // Fetch all hospitals from the database
        const hospitals = await Hospital.find();

        // Send the data back to the frontend
        return res.status(200).json({
            success: true,
            data: hospitals,
            message: 'Hospitals fetched successfully'
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching hospital data:', error);
        return res.status(500).json({
            success: false,
            message: 'Server Error: Unable to fetch hospitals',
            error: error.message
        });
    }
};


// An api to extract the list of doctors from the database of hospitals we filter the hospitlas on the basis of their resgistration no.


exports.listofdoctors = async (req, res) => {
    try {
        const { registrationNo } = req.body; // Extract registrationNo from request body
        console.log(registrationNo);

        const hospital = await Hospital.find();

        // Use forEach or find to search for the matching registration number
        let doctorlist = null;
        hospital.map((v) => {
            if (v.registrationNumber === registrationNo) {
                doctorlist = v.doctors;
                console.log(doctorlist);
                return res.status(200).json({
                    success: true,
                    data: doctorlist,
                    message: 'Doctor list fetched successfully',
                });
            }
        });

        // If no match found, return a 404 response
        if (!doctorlist) {
            return res.status(404).json({
                success: false,
                message: 'No hospital found with this registration number',
            });
        }

    } catch (error) {
        console.error('Error fetching doctor data:', error);
        return res.status(500).json({
            success: false,
            message: 'Server Error: Unable to fetch doctors',
            error: error.message,
        });
    }
};

// this for to find the hospital according to the given email 

exports.gethospitalsbyemail=async (req,res)=>{
    try{
        const {email}=req.body;
        console.log(email);

        const hospital = await Hospital.find();

        // Use map or find to search for the matching registration number
        let doctorlist = null;
        hospital.map((v) => {
            if (v.registrationNumber === registrationNo) {
                doctorlist = v.doctors;
                console.log(doctorlist);
                return res.status(200).json({
                    success: true,
                    data: doctorlist,
                    message: 'Doctor list fetched successfully',
                });
            }
        });



    }catch{

    }
}
