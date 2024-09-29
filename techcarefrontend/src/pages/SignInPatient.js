// This is the sign in page for the patient
import Header from "./Header";
// importing image for the outerbox
import outerbox from './signinpage.png'
// importing image for te innerbox

// importing image of the lady doctor to paste under the innerbox
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignInPatient() {

    // Here the part to fetch value from the input box
    // to reset the input section of the email and password

    let [addpatient, Setaddpatient] = useState({
        pemail: '',
        Ppassword: ''
    })

    let dataofpatient = (event) => {
        let olddata = { ...addpatient };  // storing the object in oldata (key value pair)
        let inputemail = event.target.name;  //storing the name of the input section so to store it as key 
        let inputvalue = event.target.value; //this is for the value of key 
        olddata[inputemail] = inputvalue  //in this we are storing the value of key in the object
        console.log(olddata);
        Setaddpatient(olddata);
    }

    let [savepdata, Setsavepdata] = useState([])
    const navigate = useNavigate() // For navigation

    // this is to fetch data from the email and password section and store it in a object

    let notreload = async (event) => {
        event.preventDefault()
        let eachpatientdata = {
            uemail: addpatient.pemail,
            upassword: addpatient.Ppassword
        }

       

        let newalldata = [...savepdata, eachpatientdata]
        Setsavepdata(newalldata)
        console.log(newalldata)
        Setaddpatient({
            pemail: '',
            Ppassword: ''

        })

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/;

        if (!passwordPattern.test(addpatient.Ppassword)) {
            toast.error('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }


        // calling the api
        try {
            const login = await axios.post('http://localhost:8084/api/rPatient/loginpatient', {
                pemail: addpatient.pemail,
                Ppassword: addpatient.Ppassword
            });

            if (login.status === 200) {
                toast.success(login.data.message);
                navigate('/'); // Redirect to hospital homepage
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


                    {/* this is for curved part */}
                    <div className="relative w-1/2">

                    </div>
                    <div className="relative w-1/2 m-10">
                        <div className="flex flex-row justify-center mt-0 m-12 mb-6 ">
                            <button className="w-[30%] h-[30px] bg-[#024959]  text-[white] border-[green] rounded-l-lg">Patient</button>
                            <button className="w-[30%] h-[30px] bg-[#58D3D3]  border-[green] rounded-r-lg"><Link to={'/SignInHospital'}>Hospital</Link></button>

                        </div>

                        <h1 className="text-3xl font-serif flex justify-center">SIGN IN</h1>

                        {/* this is for the input part */}

                        <div className="flex flex-col gap-4 mt-[20px] justify-center items-center ">
                            {/* email */}
                            <input placeholder="Email" type="text" onChange={dataofpatient} value={addpatient.pemail} name="pemail" required className="rounded-2xl w-[60%] h-[40px] text-center "></input>


                            <input placeholder="Password" type="text" onChange={dataofpatient} value={addpatient.Ppassword} name="Ppassword" required className="rounded-2xl w-[60%] h-[40px] text-center  "></input>

                            <button className="rounded-2xl w-[40%] h-[40px] bg-[#3CA6A6]">Submit</button>

                            {/* google sign */}
                            <FontAwesomeIcon icon={faGoogle} className="text-2xl mt-4 text-[#241989]"></FontAwesomeIcon>

                            {/* other optioon */}
                            <div className="flex flex-row gap-4">
                                <h1 className="text-[15px]">Don't have account?</h1>
                                <div className="text-[15px] text-[#c02c5b]"> <Link to={'/SignUpPatient'}>Sign Up</Link></div>
                            </div>
                        </div>
                    </div>



                </div>
            </form>

        </div>


    )
}





