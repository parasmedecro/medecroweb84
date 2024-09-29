// This will be the signupHospital they will put all the infromation listed below
import Header from "./Header";
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// importing image for the outerbox
import outerbox from './signinpage.png'
import axios from 'axios';
// importing image for te innerbox

// importing image of the lady doctor to paste under the innerbox
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export default function SignUpHospital() {




    // Here the part to fetch value from the input box
    // to reset the input section of the email and password

    let [addhospital, Setaddhospital] = useState({
        hname: '',
        hemail: '',
        hPassword: '',
        hotp: ''
    })

    const [isOtpSent, setIsOtpSent] = useState(false);

    let dataofhospital = (event) => {
        let olddata = { ...addhospital };  // storing the object in oldata (key value pair)
        let inputemail = event.target.name;  //storing the name of the input section so to store it as key 
        let inputvalue = event.target.value; //this is for the value of key 
        olddata[inputemail] = inputvalue  //in this we are storing the value of key in the object
        console.log(olddata);
        Setaddhospital(olddata);
    }

    // let [savehdata, Setsavehdata] = useState([])

    // this is to fetch data from the email and password section and store it in a object

    let notreload = async (event) => {
        event.preventDefault()
        // let eachhospitaldata = {
        //     hname: addhospital.hname,
        //     hemail: addhospital.hemail,
        //     hPassword: addhospital.hPassword,
        //     hotp: addhospital.hotp
        // }

        // let newalldata = [...savehdata, eachhospitaldata]
        // Setsavehdata(newalldata)

        // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // if (!passwordPattern.test(addhospital.hPassword)) {
        //     toast.error('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
        //     return;
        // }




        // calling the api
        if (!isOtpSent) {
            // Send OTP
            try {
                const response = await axios.post('http://localhost:8084/api/rHospital/hospitalsignup', {
                    hemail: addhospital.hemail
                });

                if (response.status === 200) {
                    toast.success(response.data.message);
                    setIsOtpSent(true);
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to send OTP');
            }
        } else {
            // Verify OTP and complete signup
            try {
                const response = await axios.post('http://localhost:8084/api/rHospital/verify-otp', {
                    hemail: addhospital.hemail,
                    hotp: addhospital.hotp,
                    hname: addhospital.hname,
                    hPassword: addhospital.hPassword
                });

                if (response.status === 200) {
                    toast.success(response.data.message);
                    // Clear the form or redirect as needed
                }
                Setaddhospital({
                    hname: '',
                    hemail: '',
                    hPassword: '',
                    hotp: ''
        
                })
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to verify OTP');
            }
        }






    }





    return (
        <div>
            {/* this is the header part  */}
            <ToastContainer></ToastContainer>
            <Header></Header>
            {/* from here main part of sign IN start */}
            {/* outer box */}
            <form onSubmit={notreload}>
                <div className=" w-full h-[600px] flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url(${outerbox})` }}>
                    {/* innerbox */}


                    {/* this is for curved part */}
                    <div className="relative w-1/2">

                    </div>
                    <div className="relative w-1/2 m-7">
                        <div className="flex flex-row justify-center mt-2 m-8 mb-6 ">
                            <button className="w-[30%] h-[30px] bg-[#58D3D3]  text-[white] border-[green] rounded-l-lg"><Link to={'/SignUpPatient'}>Patient</Link></button>
                            <button className="w-[30%] h-[30px]   bg-[#024959] border-[green] rounded-r-lg">Hospital</button>

                        </div>

                        <h1 className="text-3xl font-serif flex justify-center">SIGN UP</h1>

                        {/* this is for the input part */}

                        <div className="flex flex-col gap-4 mt-[20px] justify-center items-center ">
                            {/* email */}
                            <input placeholder="Hospital Name" onChange={dataofhospital} value={addhospital.hname} name="hname" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                            <input placeholder="Email" onChange={dataofhospital} value={addhospital.hemail} name="hemail" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                            <input placeholder="Password" onChange={dataofhospital} value={addhospital.hPassword} name="hPassword" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>

                            {/* this is for input the value of otp sent by the email */}
                            {isOtpSent && (
                                <input
                                    placeholder="Enter OTP"
                                    onChange={dataofhospital}
                                    value={addhospital.hotp}
                                    name="hotp"
                                    type="text"
                                    className="rounded-2xl w-[60%] h-[40px] text-center"
                                />
                            )}

                            <button className="rounded-2xl w-[40%] h-[40px] bg-[#3CA6A6]"> {isOtpSent ? 'Verify OTP' : 'Send OTP'}
                            </button>

                            {/* google sign */}
                            <FontAwesomeIcon icon={faGoogle} className="text-2xl mt-2 text-[#0066A0]"></FontAwesomeIcon>


                        </div>
                    </div>



                </div>
            </form>

        </div>

    )
}