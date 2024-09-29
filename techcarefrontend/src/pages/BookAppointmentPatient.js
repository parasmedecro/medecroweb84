// this page will open when  patient will book doctor after searching hospitalthen list of hospital will come afterselecting hospital then list of doctors come then they select for specific doctor then select book now then this page will open to show the rush and the time will take to come their chance for visiting the doctor and also show the rush and then ask for booking the slot for the and give the iformation about the patient.

import Header from "./Header";
import { Link } from 'react-router-dom'
// import { useState,useEffect } from "react";
import Footer from "./Fotter";
import GraphPage from "./Rushgraph";
import graph from './graphforappo.png'

export default function BookAppointmentPatient() {

    // const [isGraphReady, setIsGraphReady] = useState(false);

    // useEffect(() => {
    //     // Simulate data loading or any async operation
    //     const loadGraphData = () => {
    //         // You can add any logic here to check if data is ready for the graph
    //         // For now, we simulate it with a timeout
    //         setTimeout(() => {
    //             setIsGraphReady(true); // Graph data is ready
    //         }, 1000); // Adjust delay as needed
    //     };

    //     loadGraphData();
    // }, []);


    return (

        <div>
            {/* header */}
            <Header></Header>

            <div className="w-[full] h-[full] pb-24 bg-[#91B0FF]">
                <div className="flex justify-center pt-7 mb-0 pb-0">
                    <h1 className="w-[450px] rounded-xl font-serif text-[30px]  h-[45px] flex justify-center items-center   bg-[#F2E3D5] ">Book Appointment</h1>
                </div>
                {/* for grabph */}

                <div className="pt-11 ">
                    <h1 className="text-3xl mx-10 mb-4">Hospital Rush Hour</h1>
                    {/* Other appointment-related details and logic here */}

                    {/* Conditionally render the GraphPage only if the data is ready */}
                    {/* {isGraphReady ? (
                        <GraphPage />
                    ) : (
                        <div>Loading Graph...</div>
                    )} */}
                    {/* <GraphPage></GraphPage> */}
                    <img src={graph} className=" w-full h-[300px] rounded-2xl "></img>



                    <h1 className="text-3xl mx-10 mt-12">Peak Visiting Hours</h1>
                    <h1 className="text-3xl mx-10 mt-6">Weekdays:7pm-11pm</h1>
                    <h1 className="text-3xl mx-10 mt-6">Weekends:9am-11am ,3am-5pm, 7pm-9pm</h1>
                    <h1 className="text-3xl mx-10 mt-6">NO. of Appointment before you</h1>
                </div>

                <div className="flex justify-center">
                    <h1 className="flex justify-center text-ellipsis text-2xl w-[50%] h-[40px] my-14">WOULD YOU LIKE TO PROCEED FURTHER WITH THE BOOKING FOR THE APPOINTMENT?</h1>


                </div>

                <div className="flex justify-center m-10">
                    <Link to={'/PatientData'}><button className="bg-green-400  rounded-lg text-white font-bold py-2 px-4 w-[190%] mr-2">Book</button></Link>
                    <button className="bg-red-400 rounded-lg text-white font-bold py-2 mx-28 px-4 w-[20%]">Back</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}