// This is the page open patient check for bed availbility this will open with the list of hospital wiht the no. of bed it contains when we click on book now then that bed reservation page will get open and from their details page then for payment.Thsi is flow to book bed for an specific hospital
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";
import { Link } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";

export default function BedAvailability() {

    // in this also to fetch the location manually or by live location 
    const [hospitals, sethospitals] = useState([]);
    const [location, setLocationError] = useState()


    // Function to get user location and search for nearby hospitals on the basis of your live location 
    const findNearbyHospitals = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log({ latitude, longitude });

                    try {
                        // Send the user's location to the backend to find nearby hospitals
                        const response = await axios.post('http://localhost:8084/api/rHospital/nearbyhospital', {
                            userLatitude: latitude,
                            userLongitude: longitude
                        });

                        if (response.status === 200) {
                            console.log(response.data)
                            sethospitals(response.data);

                            toast.success('Nearby hospitals fetched successfully!');
                        } else {
                            toast.error('No nearby hospitals found.');

                        }
                    } catch (error) {
                        toast.error('Error fetching nearby hospitals.');
                        console.log(error)
                    }
                },
                (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        toast.error('Location permission denied. Please allow access to your location.');
                    } else {
                        toast.error('Error getting location: ' + error.message);
                    }
                    setLocationError(error.message);
                }
            );
        } else {
            toast.error('Geolocation is not supported by this browser.');
        }
    };

    // This is the code to do the search by manually

    const [address, setAddress] = useState('');

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    // Function to geocode the address entered by the user
    const searchByAddress = async () => {
        try {
            // Using a geocoding API (replace with your API and query)
            const apiKey = 'f0905f30abbb4363a7c502bc3a67f41d';
            const hresponse = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
                params: {
                    q: address,
                    key: apiKey
                }
            })

            const { lat, lng } = hresponse.data.results[0].geometry;



            // Send the lat/lon to your backend to find hospitals
            const response = await axios.post('http://localhost:8084/api/rHospital/nearbyhospital', {
                userLatitude: lat,
                userLongitude: lng
            });

            if (response.status === 200) {
                console.log(response.data)
                sethospitals(response.data);
                toast.success('Nearby hospitals fetched successfully!');
            } else {
                toast.error('No nearby hospitals found.');
            }
        } catch (error) {
            toast.error('Error fetching nearby hospitals from address.');
        }
    };

    const HospitalFind = hospitals && hospitals.length > 0 ? (
        hospitals
            .sort((a, b) => a.distance - b.distance)  // Sorting hospitals by distance in ascending order
            .map((v, i) => <ShowBed hos={v} key={i} />)  // Map over sorted hospitals and render
    ) : (
        <p className="text-3xl font-serif  text-center mt-0 mb-28 text-[#6060a4]"> To See Hospital Give Your Location  </p>
    );






    return (
        <div>
            {/* header */}
            <Header></Header>
            <ToastContainer></ToastContainer>


            <div className="w-full h-full  flex flex-col justify-center items-center bg-[#F2E3D5]">
                <h1 className="font-poppins font-semibold text-3xl m-6">Book Appointment</h1>

                <input
                    className="w-[50%] h-[50px] rounded-lg m-6 border-[1px] shadow-[5px_5px_5px_grey] text-center"
                    placeholder="Your location"
                    value={address}
                    onChange={handleAddressChange}
                />
                <button
                    className="bg-blue-500 text-white p-3 rounded-md m-4"
                    onClick={searchByAddress}
                >
                    Search by Address
                </button>
                <button
                    className="bg-green-500 text-white p-3 rounded-md m-4"
                    onClick={findNearbyHospitals}
                >
                    Search by Live Location
                </button>

               



            </div>

            <div className=" bg-[#F2E3D5] p-10 pb-4">
            {HospitalFind}
            </div>


        </div>
    )
}








function ShowBed({ hos }) {

    const bedtype = hos.bedDetails && hos.bedDetails.length > 0 ? (
        hos.bedDetails.map((bed, index) => (
            //   <div key={index}>
            //     <h1>Bed Type: {bed.bedType}</h1>
            //     <h1> {bed.totalBeds}</h1>
            //   </div>
            <div className="bg-[#F2E3D5]  flex flex-col items-center rounded-xl py-2 gap-[7px]">
                <h1>{bed.bedType}</h1>
                <h1>{bed.totalBeds}</h1>
                <Link to={'/BedConfirmationPageforPatient'} ><button className="w-[full] px-4 h-[35px] rounded-md bg-[#58D3D3] mb-6">Book Now</button></Link>
            </div>
        ))
    ) : (
        <h1>No bed details available</h1>
    )

    return (




        <div className="flex justify-center m-12 ">
            <div className="bg-[#58D3D3] h-[full] w-[88%] rounded-2xl shadow-[6px_4px_4px_grey] p-2">
                <h1 className="text-xl font-roboto m-3">{hos.hospitalName}</h1>
                <div className="grid grid-flow-col grid-cols-3 gap-10 mx-10 ">
                    {/* <div className="bg-[#F2E3D5]  flex flex-col items-center rounded-xl py-2 gap-[7px]">
                        <h1>{bed1}</h1>
                        <h1>{no1}</h1>
                        <Link to={'/BedConfirmationPageforPatient'} ><button className="w-[full] px-4 h-[35px] rounded-md bg-[#58D3D3] mb-6">Book Now</button></Link>
                    </div> */}
                    {bedtype}

                </div>
            </div>
        </div>

    )
}

