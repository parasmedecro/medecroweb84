// Sign up for patient 

import Header from "./Header";
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// importing image for the outerbox
import outerbox from './signinpage.png'
import axios from 'axios';

// importing image for te innerbox

// importing image of the lady doctor to paste under the innerbox
// import ladydoctor from "./innerlabdy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export default function SignUpPatient() {

    // Here the part to fetch value from the input box
    // to reset the input section of the email and password

    let [addpatient, Setaddpatient] = useState({
        pname: '',
        pemail: '',
        Ppassword: '',
        Potp: ''
    })
    //creating a state for otp
    const [isOtpSent, setIsOtpSent] = useState(false);

    let dataofpatient = (event) => {
        let olddata = { ...addpatient };  // storing the object in oldata (key value pair)
        let inputemail = event.target.name;  //storing the name of the input section so to store it as key 
        let inputvalue = event.target.value; //this is for the value of key 
        olddata[inputemail] = inputvalue  //in this we are storing the value of key in the object
        console.log(olddata);
        Setaddpatient(olddata);
    }

    // let [savepdata, Setsavepdata] = useState([])







    // this is to fetch data from the email and password section and store it in a object

    let notreload = async (event) => {
        event.preventDefault()

        // let eachpatientdata = {
        //     pname: addpatient.pname,
        //     pemail: addpatient.pemail,
        //     Ppassword: addpatient.Ppassword,
        //     Potp: addpatient.Potp
        // }

        // let newalldata = [...savepdata, eachpatientdata]
        // Setsavepdata(newalldata)
        // console.log(newalldata)

        // addPatientdata(eachpatientdata);



        

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/;

        if (!passwordPattern.test(addpatient.Ppassword)) {
            toast.error('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }


        // calling the api
        if (!isOtpSent) {
            // Send OTP
            try {
                const response = await axios.post('http://localhost:8084/api/rPatient/patientsignup', {
                    pemail: addpatient.pemail
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
                const response = await axios.post('http://localhost:8084/api/rPatient/verify-otp', {
                    pemail: addpatient.pemail,
                    Potp: addpatient.Potp,
                    pname: addpatient.pname,
                    Ppassword: addpatient.Ppassword
                });

                if (response.status === 200) {
                    toast.success(response.data.message);
                    // Clear the form or redirect as needed
                }

                Setaddpatient({
                    pname: '',
                    pemail: '',
                    Ppassword: '',
                    Potp: ''
        
                })
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to verify OTP');
            }
        }
    }






    // // calling the api
    // const addPatientdata = async (addpatient) => {
    //     await axios.post('http://localhost:8084/api/rPatient/patientsignup', addpatient).then(response => {
    //         toast.success("Sign up finished");  // Show success notification with backend message
    //     })
    //     .catch(error => {
    //         if (error.response && error.response.data.message === "Invalid email format"){
    //             toast.error("Invalid email format")
    //         }else{
    //             toast.error("User already exist " ); 

    //         }
    //         // Show error notification if the request fails
    //     });

    // }






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
                            <button className="w-[30%] h-[30px] bg-[#024959]  text-[white] border-[green] rounded-l-lg">Patient</button>
                            <button className="w-[30%] h-[30px] text-white bg-[#58D3D3]  border-[green] rounded-r-lg"><Link to={'/SignUpHospital'}
                            >Hospital</Link></button>

                        </div>

                        <h1 className="text-3xl font-serif flex justify-center">SIGN UP</h1>

                        {/* this is for the input part */}

                        <div className="flex flex-col gap-4 mt-[20px] justify-center items-center ">
                            {/* email */}
                            <input placeholder="Name" onChange={dataofpatient} value={addpatient.pname} name="pname" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                            <input placeholder="Email" onChange={dataofpatient} value={addpatient.pemail} name="pemail" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                            <input placeholder="Password" onChange={dataofpatient} value={addpatient.Ppassword} name="Ppassword" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>


                            {isOtpSent && (
                                <input
                                    placeholder="Enter OTP"
                                    onChange={dataofpatient}
                                    value={addpatient.Potp}
                                    name="Potp"
                                    type="text"
                                    className="rounded-2xl w-[60%] h-[40px] text-center"
                                />
                            )}



                            <button className="rounded-2xl w-[40%] h-[40px] bg-[#3CA6A6]">{isOtpSent ? 'Verify OTP' : 'Send OTP'}
                            </button>

                            {/* google sign */}
                            <FontAwesomeIcon icon={faGoogle} className="text-2xl mt-2 text-[#4ba850]"></FontAwesomeIcon>


                        </div>
                    </div>



                </div>
            </form>

        </div>

    )
}