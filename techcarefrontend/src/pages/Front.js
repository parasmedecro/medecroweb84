// this is the home page of the website it will first open for hte patient use

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import doctor from './homed2.png'
import { faAddressBook, faHospital, faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"
import Footer from "./Fotter"
export default function Front() {


    return (

        <div>
            <div className=" w-full h-[520px]  bg-[#003F7D]">
                <div className="flex justify-center">
                    <input type="text" className="w-[450px] rounded-xl h-[45px] mt-10 py-0  bg-[white] px-4" placeholder="Search with Hospital"></input>
                </div>
                <div className="">

                    <img src={doctor} className="w-[800px] h-[400px] mx-auto mt-[35px]" alt="Home Doctor" />
                </div>

                {/* this is for the icon */}
                <div className="bg-[#F3ECE5]">
                    <div className="flex justify-between mx-14  py-12  ">
                        <div className="flex flex-col gap-6 mx-3  text-3xl">
                            <i><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                            <h1>100</h1>
                        </div>
                        {/* bed */}
                        <div className="flex flex-col gap-6 mx-3  text-3xl">
                            <i><FontAwesomeIcon icon={faAddressBook} ></FontAwesomeIcon></i>
                            <h1>10000</h1>
                        </div>

                        <div className="flex flex-col gap-6 mx-3  text-3xl">
                            <i><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></i>
                            <h1>5000</h1>
                        </div>
                    </div>
                </div>

                {/* this is for the find doctor section */}

                <div className="bg-[#F3ECE5]">
                    <h1 className="text-5xl flex justify-center p-14 font-semibold">Find the Doctor</h1>

                    <div className="flex justify-between ">
                        <input type="text" placeholder="Name"  className="w-[300px] placeholder-black h-[60px] border-[2px] text-2xl  text-black  rounded-lg text-center m-10 bg-[#91B0FF]"></input>
                        <input type="text" placeholder="Speciality"   className="w-[300px] h-[60px] border-[2px]  text-2xl rounded-lg placeholder-black text-center m-10 bg-[#91B0FF]"></input>
                        <button className="w-[250px] h-[40px] hover:scale-90 placeholder-black border-[2px] border-[#E6722A] text-2xl rounded-lg text-center m-10 mt-12 bg-[#E6722A]">Submit</button>
                    </div>
                </div>

                {/* this is for the appointment and availbility */}

                <div className="bg-[#F3ECE5] flex flex-row justify-between p-8 pb-24">

                    <Link to={'/BookappointmentByHospital'}><button className="border-[2px] border-[black] p-16 rounded-lg flex flex-col gap-8 justify-center items-center hover:scale-90 hover:bg-blue-400 shadow-[5px_8px_2px_blue] m-12 shadow-gray-600">
                        <i className="text-6xl mx-16"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                        <h1 className="text-3xl font-serif font-normal">Book Appointment</h1>
                    </button></Link>
                    {/* seat availbility */}
                    <Link to={'/BedAvailability'}><button className="border-[2px] border-[black] py-16 px-10 rounded-lg flex flex-col gap-8 justify-center items-center hover:scale-90 hover:bg-blue-400 shadow-[5px_8px_2px_blue] m-12 shadow-gray-600">
                        <i className="text-6xl mx-24"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                        <h1 className="text-3xl font-serif font-normal">Check Bed Availability</h1>
                    </button></Link>

                </div>
                <Footer></Footer>
            </div>
           
        </div>
    )
}