// this is the home page of the hosital it will open after the login of hospital 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import hospital from "./hospitalphoto.png"
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom"
import Footer from "./Fotter";

export default function Hospitalhomepage() {
// herre we are loading that hospital which will be in signing in correctly now we will all the data present for this hospital
    // const location=useLocation();
    // const fetchhemail=location.state.email;
    // console.log(fetchhemail)

    // calling the api for the hospitals to use the data present in it

    return (
        <div>
            {/* importing header file */}
            <Header></Header>
            <div className=" w-full h-[520px]  bg-[#003F7D]">

                <div className="flex justify-center pt-7 mb-0 pb-0">
                    <h1 className="w-[450px] rounded-xl font-serif text-[30px]  h-[45px] flex justify-center items-center   bg-[#F2E3D5] ">Hospital Name</h1>

                </div>



                <div className="pt-11">

                    <img src={hospital} className="w-[1200px] h-[400px] rounded-2xl mx-auto mt-[3px]" alt="Home Doctor" />
                </div>

                {/* this is for the hospital uses part */}

                <div className="grid maxw-[full] grid-cols-2 mt-9 gap-[10px]">

                    <Link to={'/inventoryhomepage'}><div className=" m-12 hover:scale-90 hover:bg-[#3F75FF] pt-8 h-[250px] bg-[#F2E3D5] rounded-2xl shadow-[5px_6px_5px_grey] ">
                        <i className="text-6xl flex justify-center mt-9"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                        <h1 className="flex  justify-center text-[30px] pt-9">Inventory Mangagement</h1>
                    </div></Link>
                    {/*  */}
                    <Link to={'/patientbhospital'}><div className=" m-12 pt-8 h-[250px] hover:scale-90 hover:bg-[#3F75FF] bg-[#F2E3D5] rounded-2xl shadow-[5px_6px_5px_grey] ">
                        <i className="text-6xl flex justify-center mt-9"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                        <h1 className="flex  justify-center text-[30px] pt-9">Patient Information</h1>
                    </div></Link>
                    {/*  */}
                    <Link to={'/Bedbookingpending'}><div className=" hover:scale-90 hover:bg-[#3F75FF] m-12 pt-8 h-[250px] bg-[#F2E3D5] rounded-2xl shadow-[5px_6px_5px_grey] ">
                        <i className="text-6xl flex justify-center mt-9"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                        <h1 className="flex  justify-center text-[30px] pt-9">Bed Booking Confirmation</h1>
                    </div></Link>
                    {/*  */}
                    <Link to={'/BedAvailbilityInfo'} ><div className=" hover:scale-90 hover:bg-[#3F75FF] m-12 pt-8 h-[250px] bg-[#F2E3D5] rounded-2xl shadow-[5px_6px_5px_grey] ">
                        <i className="text-6xl flex justify-center mt-9"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></i>
                        <h1 className="flex  justify-center text-[30px] pt-9">Bed Availability Information</h1>
                    </div></Link>



                </div>

                <Footer></Footer>
            </div>

        </div>

    )
}