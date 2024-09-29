// This page will open when  patient want to serach hospital near by them by giveing their live location and address .This will give the list of hospital nearby them 
import Header from "./Header";
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate,  } from 'react-router-dom'
import 'ol/ol.css';
// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import { Point, LineString } from 'ol/geom';
// import { Feature } from 'ol';
// import { Vector as VectorLayer, VectorSource } from 'ol/layer';
// import { Icon, Style, Stroke } from 'ol/style';
// import { fromLonLat } from 'ol/proj';



export default function BookappointmentByHospital() {

    const [hospitals, sethospitals] = useState([]);
    const [locationError, setLocationError] = useState(null);

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
                sethospitals(response.data);
                toast.success('Nearby hospitals fetched successfully!');
            } else {
                toast.error('No nearby hospitals found.');
            }
        } catch (error) {
            toast.error('Error fetching nearby hospitals from address.');
        }
    };

    // const [nhospitals, setnhospitals] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);




    // useEffect(() => {
    //     const fetchHospitals = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8084/api/rHospital/hospitalinfo'); // Adjust API path if necessary
    //             setnhospitals(response.data.data); // Access the hospital data
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error.message);
    //             setLoading(false);
    //         }
    //     };

    //     fetchHospitals();
    // }, []);

    

    const navigate=useNavigate();
    // this is to show doctor in this we are fetching registraiton no of the hospital on clicking to sort that hospital to show the list of the doctor in that hospital
    

    const handleRegistrationNo = async (registrationNo) => {
        console.log('Registration No:', registrationNo);


        hospitals.map((v, i) => {
            if (v.registrationNumber === registrationNo) {
                let doctorlist = v.doctors
                console.log(doctorlist)

            }
        })

        

    
            
                const response = await axios.post('http://localhost:8084/api/rHospital/doctorlist',{registrationNo});

                if (response.status === 200) {
                    console.log(response.data.data)
                    navigate("/BookAppbyDoctorAfterHospitallist",{state : {response:response.data}})  // Update state with fetched doctor list
                    toast.success('Nearby hospitals fetched successfully!');
                } else {
                    toast.error('No nearby hospitals found.');
                }
           
        



    };

    // const showDoctor = () => {
    //     if (doctorlist) {

    //     }

    // }




    const HospitalFind = hospitals && hospitals.length > 0 ? (
        hospitals
            .sort((a, b) => a.distance - b.distance)  // Sorting hospitals by distance in ascending order
            .map((v, i) => <Showhospital hos={v} handleRegistrationNo={handleRegistrationNo} key={i} />)  // Map over sorted hospitals and render
    ) : (
        <p className="text-3xl font-serif text-[#5c5caa]"> To See Hospital give your location</p>
    );

    // const dlist = Doctor.length > 0 ? Doctor.map((v, i) => (
    //     <ShowDoctor key={i} v={v} />
    // )) : <p>No doctors available</p>;


    






    return (

        <div>
            <Header></Header>


            <div className="w-full h-full pb-40 flex flex-col justify-center items-center bg-[white]">
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

                {/* Display hospitals */}
                <div className="flex flex-col gap-4">
                {HospitalFind}

                </div>
                

{/* 
                <div>
                    {dlist}
                </div> */}




            </div>
            <ToastContainer />










        </div>
    )
}











// This is for the hospital we had find nearby us
function Showhospital({ hos, handleRegistrationNo }) {

    // console.log(hos)


    return (

        // <Link to={'/BookAppbyDoctorAfterHospitallist'}>
        <div className="flex w-full h-full justify-center " >

            <button onClick={() => handleRegistrationNo(hos.registrationNumber)} className="flex w-[1000px] justify-between  rounded-md shadow-[2px_3px_5px_#615151] items-center p-8 h-[50px] bg-[#9a8a8a] ">

                <h1>{hos.hospitalName}</h1>
                <h1>{`${Math.floor(hos.distance)} km`}</h1>

            </button>

        </div>
        //</Link>


    )
}


// Showing the distance from the patient ot the hospital 
// This is the function

// const HospitalMap = ({ userLocation, hospitalLocation, distance }) => {
//     const mapRef = useRef(null);
  
//     useEffect(() => {
//       // Initialize map
//       const map = new Map({
//         target: mapRef.current,
//         layers: [
//           new TileLayer({
//             source: new OSM(),
//           }),
//         ],
//         view: new View({
//           center: fromLonLat(userLocation), // Center the map on user's location
//           zoom: 12,
//         }),
//       });
  
//       // Create user and hospital markers
//       const userMarker = new Feature({
//         geometry: new Point(fromLonLat(userLocation)),
//       });
//       const hospitalMarker = new Feature({
//         geometry: new Point(fromLonLat(hospitalLocation)),
//       });
  
//       userMarker.setStyle(
//         new Style({
//           image: new Icon({
//             src: 'path-to-user-marker.png', // Replace with a valid marker path
//             scale: 0.05, // Adjust scale if necessary
//           }),
//         })
//       );
  
//       hospitalMarker.setStyle(
//         new Style({
//           image: new Icon({
//             src: 'path-to-hospital-marker.png', // Replace with a valid marker path
//             scale: 0.05, // Adjust scale if necessary
//           }),
//         })
//       );
  
//       const vectorLayer = new VectorLayer({
//         source: new VectorSource({
//           features: [userMarker, hospitalMarker],
//         }),
//       });
  
//       map.addLayer(vectorLayer);
  
//       // Fetch the route and draw it on the map
//       const getRoute = async () => {
//         try {
//           const response = await fetch(
//             `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation[0]},${userLocation[1]};${hospitalLocation[0]},${hospitalLocation[1]}?geometries=geojson&access_token=YOUR_MAPBOX_ACCESS_TOKEN`
//           );
//           const data = await response.json();
//           const routeCoords = data.routes[0].geometry.coordinates.map((coord) => fromLonLat(coord));
  
//           const routeFeature = new Feature({
//             geometry: new LineString(routeCoords),
//           });
  
//           routeFeature.setStyle(
//             new Style({
//               stroke: new Stroke({
//                 color: '#ffcc33', // Line color
//                 width: 4,
//               }),
//             })
//           );
  
//           const routeLayer = new VectorLayer({
//             source: new VectorSource({
//               features: [routeFeature],
//             }),
//           });
  
//           map.addLayer(routeLayer);
//         } catch (error) {
//           console.error('Error fetching route:', error);
//         }
//       };
  
//       getRoute();
//     }, [userLocation, hospitalLocation]);
  
//     return (
//       <div>
//         <div>
//           Distance to hospital: <span>{distance} km</span>
//         </div>
//         <div
//           ref={mapRef}
//           style={{ width: '100%', height: '500px', marginTop: '20px' }}
//         ></div>
//       </div>
//     );
//   };






