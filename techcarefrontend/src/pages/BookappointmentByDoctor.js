// this page in hold but this will search the docotr according to the patient location

import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Fotter";
// import { ShowDoctor } from "./BookappointmentByHospital";

export default function BookappointmentByDoctor() {

    // let doctorbox=()=>{
    //     return(
    //         <showDoctor></showDoctor>
    //     )
    // }
    // this is to fetch the registration no send by the book appointentenn by hospital 

    const location = useLocation();
    const doctor = location.state.response
    console.log(doctor)

    const [doctorl,setdoctor1]=useState([]);

    useEffect(()=>{
        setdoctor1(location.state.response.data)

    },[])
    
    

    const dlist = doctorl.length > 0 ? doctorl.map((v, i) => (
        <ShowDoctor key={i} v={v} />
    )) : <p>No doctors available</p>;
    



    // Rendering the list of doctors
    




    return (
        <div>
            <Header></Header>

            <div className="w-full h-full flex flex-col justify-center items-center bg-[#F2E3D5]">
                <h1 className="font-poppins font-semibold text-3xl m-6">Book Appointment</h1>

                <input className="w-[50%] h-[50px] rounded-lg m-6 border-[1px] shadow-[5px_5px_5px_grey] text-center" placeholder="Your location" ></input>

                {/* now this is for the showing the doctor */}
                {/* {doctorbox} */}
                {/* <ShowDoctor></ShowDoctor> */}

                <div className="grid grid-cols-3 w-full m-11 gap-10 p-10 ">
                {dlist}
                </div>
            
                




            </div>
            <Footer></Footer>
        </div>
    )
}


export function ShowDoctor({ v }) {

    console.log(v)
    if (!v) {
        return <div>No doctor data available</div>;
    }


    return (

        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
      <div className="flex justify-center">
        <img
          src={""}
          alt={v.name}
          className="rounded-full w-28 h-24 object-cover mb-4"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-1">{v.name}</h2>
        <p className="text-gray-500 mb-4">Specialization: {v.specialization}</p>
        <div className="flex justify-between items-center">
          <span className="bg-gray-300 text-gray-700 rounded-full px-3 py-1">
            {v.availability}
          </span>
          {/* here i am linking to the page which show rush and the time of booking and other and ask the details of patients when they prss on book they will led to a patient details page and then furthur for the fee payment */}
          <Link to='/BookAppointmentPatient'><button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Book Now
          </button></Link>
        </div>
      </div>
    </div>
    )
}












