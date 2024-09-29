// This is the sign in page for hospital here then will put their email and password to sign in 
import Header from "./Header";
import React, { useState } from 'react'
import outerbox from './signinpage.png'
// importing image for the outerbox
// import outerbox from "./outerboxback.png"
// importing image for te innerbox

// importing image of the lady doctor to paste under the innerbox
// import ladydoctor from "./innerlabdy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignInHospital() {

    // Here the part to fetch value from the input box
    // to reset the input section of the email and password

    let [addhospital, Setaddhospital] = useState({
        hemail: '',
        hPassword: ''
    })

    let dataofhospital = (event) => {
        let olddata = { ...addhospital };  // storing the object in oldata (key value pair)
        let inputemail = event.target.name;  //storing the name of the input section so to store it as key 
        let inputvalue = event.target.value; //this is for the value of key 
        olddata[inputemail] = inputvalue  //in this we are storing the value of key in the object
        console.log(olddata);
        Setaddhospital(olddata);
    }

    let [savehdata, Setsavehdata] = useState([])
    const navigate = useNavigate() // For navigation

    // this is to fetch data from the email and password section and store it in a object

    let notreload = async (event) => {
        event.preventDefault()
        let eachhospitaldata = {
            hemail: addhospital.hemail,
            hPassword: addhospital.hPassword
        }
        
        let newalldata = [...savehdata, eachhospitaldata]
        Setsavehdata(newalldata)
        console.log(newalldata)
        Setaddhospital({
            hemail: '',
            hPassword: ''

        })

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(addhospital.hPassword)) {
            toast.error('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }




        // calling the api
        try {
            const login = await axios.post('http://localhost:8084/api/rHospital/loginhospital', {
                hemail: addhospital.hemail,
                hPassword: addhospital.hPassword
            });

            if (login.status === 200) {
                toast.success(login.data.message);

                navigate('/Hospitalhomepage',{state:{email:addhospital.hemail}}); 
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }


    }

    return (
        <div>
            {/* this is the header part  */}
            <Header></Header>
            <ToastContainer></ToastContainer>
            {/* from here main part of sign IN start */}
            {/* outer box */}
            <form onSubmit={notreload}>
                <div className=" w-full h-[600px] flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url(${outerbox})` }}>
                    {/* innerbox */}
                    {/* <div className="w-[70%] h-[75%]  rounded-lg  flex bg-cover bg-center  bg-[white]"> */}

                    {/* this is for curved part */}
                    <div className="relative w-1/2">

                    </div>

                    <div className="relative w-1/2 m-10 ">
                        <div className="flex flex-row justify-center mt-0 m-12 mb-6 ">
                            <button className="w-[30%] h-[30px] bg-[#58D3D3]    text-[white] border-[green] rounded-l-lg"><Link to={'/SignInPatient'}>Patient</Link></button>
                            <button className="w-[30%] h-[30px] text-[white] bg-[#024959]  border-[green] rounded-r-lg">Hospital</button>

                        </div>

                        <h1 className="text-3xl font-serif flex justify-center">SIGN IN</h1>

                        {/* this is for the input part */}

                        <div className="flex flex-col gap-4 mt-[20px] justify-center items-center ">
                            {/* email */}
                            <input placeholder="Hospital Email" type="text" onChange={dataofhospital} name="hemail" value={addhospital.hemail} className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                            <input placeholder="Password" onChange={dataofhospital} name="hPassword" value={addhospital.hPassword} type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>

                            <button className="rounded-2xl w-[40%] h-[40px] bg-[#3CA6A6]">Submit</button>

                            {/* google sign */}
                            <FontAwesomeIcon icon={faGoogle} className="text-2xl mt-4 text-[#6ec6a3]"></FontAwesomeIcon>

                            {/* other optioon */}
                            <div className="flex flex-row gap-4">
                                <h1 className="text-[15px]">Don't have account?</h1>
                                <div className="text-[18px] text-[#cd3636]"> <Link to={'/SignUpPatient'}>Sign Up</Link></div>
                            </div>
                        </div>
                    </div>



                </div>
            </form >


        </div >

    )
}