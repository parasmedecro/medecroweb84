// this is the page when Hospital have to update the no of beds.
import Header from "./Header";
import { Link } from 'react-router-dom'

export default function BedAvailabilityinfo() {

    return (

        <div>
            {/* Header */}
            <Header></Header>
            <div className="w-[full] h-[full] pb-24 bg-[#ECE6E0]">

                <div className="flex justify-center pt-7 mb-0 pb-0">
                    <h1 className="w-[450px] rounded-xl font-serif text-[30px]  h-[45px] flex justify-center items-center   bg-[#f1c8a2] ">Bed Availability Information</h1>

                </div>

                {/* Informtion about bed */}
                <div className="flex flex-col items-center gap-11 my-9 ">
                    <div className="flex flex-row justify-between items-center w-[80%] p-4  rounded-md h-[50px] bg-[#D9D9D9]">
                        <h1 className="text-xl font-poppins ">No. of General Wards beds:</h1>
                        <input type="number" className="w-[15%] h-[35px] text-center rounded-md bg-[grey]"></input>

                    </div>

                    <div className="flex flex-row justify-between items-center w-[80%] p-4  rounded-md h-[50px] bg-[#D9D9D9]">
                        <h1 className="text-xl font-poppins ">No. of General Wards beds:</h1>
                        <input type="number" className="w-[15%] h-[35px] text-center rounded-md bg-[grey]"></input>

                    </div>

                    <div className="flex flex-row justify-between items-center w-[80%] p-4  rounded-md h-[50px] bg-[#D9D9D9]">
                        <h1 className="text-xl font-poppins ">No. of General Wards beds:</h1>
                        <input type="number" className="w-[15%] h-[35px] text-center rounded-md bg-[grey]"></input>

                    </div>

                    <div className="flex flex-row justify-between items-center w-[80%] p-4  rounded-md h-[50px] bg-[#D9D9D9]">
                        <h1 className="text-xl font-poppins ">No. of General Wards beds:</h1>
                        <input type="number" className="w-[15%] h-[35px] text-center rounded-md bg-[grey]"></input>

                    </div>

                    <div className="flex flex-row justify-between items-center w-[80%] p-4  rounded-md h-[50px] bg-[#D9D9D9]">
                        <h1 className="text-xl font-poppins ">No. of General Wards beds:</h1>
                        <input type="number" className="w-[15%] h-[35px] text-center rounded-md bg-[grey]"></input>

                    </div>
                </div>

            </div>

        </div>
    )
}