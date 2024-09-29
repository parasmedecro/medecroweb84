
// This is the page when hospital want to see how many patient have confirmed bed and also the detail of patient to had booked the bed
import Header from "./Header";
import { Link } from 'react-router-dom'

export default function Bedbookingconfirm() {

    return (

        <div>
            {/* Header */}
            <Header></Header>
            <div className="w-[full] h-[full] pb-24 bg-[#F3ECE5]">
                <div className="flex justify-center pt-7 mb-0 pb-0">
                    <h1 className="w-[450px] rounded-xl font-serif text-[30px]  h-[45px] flex justify-center items-center   bg-[#F2E3D5] ">Bed Booking Confirmation</h1>



                </div>
                {/* button to change for confirm and pending bedconfirmation  */}

                <div className="flex flex-row justify-center mt-12  ">
                    <Link to={'/Bedbookingpending'}><button className="w-[300px] h-[50px] bg-[#58D3D3]    text-[white] border-[green] rounded-l-lg">Pending Reservation</button></Link>
                    <button className="w-[30%] h-[50px] bg-[#024959] text-[white] border-[green] rounded-r-lg">Confirm Reservation</button>

                </div>
                <div >
                    <div className="flex justify-center items-center h-screen  bg-[#f5ebe1]">
                        <table className="w-[65%] bg-[#e0d4c6] border-collapse rounded-lg border border-[black]">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="bg-gray-500 text-white text-left px-4 py-2 text-lg">Confirmed Reservation</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]">Reservation ID</td>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]"></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]">Patient name</td>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]"></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%]  border-[black]">Bed Type</td>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]"></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]">Reservation Time</td>
                                    <td className="px-4 py-4 border-t border-r-2 w-[50%] border-[black]"></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}