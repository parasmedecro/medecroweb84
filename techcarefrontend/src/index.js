import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';


import reportWebVitals from './reportWebVitals';
import ContactUs from './pages/ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpHospital from './pages/signuphospital';
import SignUpPatient from './pages/SignUppatinet';

import SignInHospital from './pages/SignInHospital';
import BookAppointmentByDoctor from './pages/BookappointmentByDoctor';

import BedAvailability from './pages/BedAvailability';

import SignInPatient from './pages/SignInPatient';
import AboutUs from './pages/About';
import Doctorregistration from './pages/Doctorregistration';
import PatientData from './pages/PatientProfile';
import BookappointmentByHospital from './pages/BookappointmentByHospital';
import Hospitalhomepage from './pages/Hospitalhomepage';
import BedAvailabilityinfo from './pages/BedAvailbilityInfobyhospital';
import Bedbookingconfirm from './pages/Bedbookingconfirm';
import Bedbookingpending from './pages/Bedbookingpending';
import BookAppointmentPatient from './pages/BookAppointmentPatient';
import BedBookingForm from './pages/PatDetforbedBook';
import BedReservationConfirmation from './pages/Bedconfirmforpat';
import PaymentForm from './pages/Payment';
import HospitalRegistrationForm from './pages/HospitalInformationaftsub';
import GeneralUseForm from './pages/patientregistration';
import BookappointmentByDoctor from './pages/BookappointmentByDoctor';
import InventoryHomePage from './pages/inventoryhomepage';
import Patientbhospital from './pages/patientbhospital';
import HomePage from './pages/inventoryhomepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter=createBrowserRouter([
  {
    path:'/',    //this is for the homepage 
    element:<Home></Home>
  },
  {
    path:'/AboutUs',  //this is will open the aboutus page
    element:<AboutUs></AboutUs>
  },
  {
    path:'/SignInPatient',  //this will open the sign in page of patient
    element:<SignInPatient></SignInPatient>
  },
  {
    path:'/SignInHospital',  // this will open the sign page of hospital
    element:<SignInHospital></SignInHospital>
  },
  {
    path:'/ContactUs',  //this will open contact us page 
    element:<ContactUs></ContactUs>
  },
  {
    path:'/SignUpPatient',  //this will open sign up page for patient 
    element:<SignUpPatient></SignUpPatient>
  },
  {
    path:'/SignUpHospital',  //this will open sign up page for hospital

    element:<SignUpHospital></SignUpHospital>
  },
  {
    path:'/BookAppointment',    //this will open page after  selection of  hospital which contains the doctor information to book appointment
    element:<BookappointmentByDoctor></BookappointmentByDoctor>
  },
  {
    path:'/BedAvailability',   //  this is the page open we have to book the bed after the selection of hospital 
    element:<BedAvailability></BedAvailability>
  },
  {
    path:'/Doctorregistration',  //this is the page of  doctor to register for clinic or new doctor registration 
    element:<Doctorregistration></Doctorregistration>
  },
  {
    path:'/PatientData',   // this will ask all informtion from the patient and show at the profile 
    element:<PatientData></PatientData>
  },
  {
    path:'/BookappointmentByHospital',   //This page will open when  patient want to serach hospital near by them by giveing their live location and address .This will give the list of hospital nearby them
    element:<BookappointmentByHospital></BookappointmentByHospital>
  },
  {
    path:'/Hospitalhomepage',  //This is the homepage of the hospital in this all features of the hospital (inventory ,patient booking)
    element:<Hospitalhomepage></Hospitalhomepage>
  },
  {
    path:'/BedAvailbilityInfo',  //this is to update the bed in the hospitals
    element:<BedAvailabilityinfo></BedAvailabilityinfo>
  },
  {
    path:'/Bedbookingconfirm',  // This is the page when hospital want to see how many patient have confirmed bed and also the detail of patient to had booked the bed
    element:<Bedbookingconfirm></Bedbookingconfirm>
  },
  {
    path:'/Bedbookingpending',  // this page will show the the hospital Patient who have pending reservation for the bed from here they approve the bed after approve the bed will get confirm and it will go into the confirm section 

    element:<Bedbookingpending></Bedbookingpending>
  },
  {
    path:'/BookAppointmentPatient',  //this page will open when patient select the doctor and proceed for booking it will show rush
    element:<BookAppointmentPatient></BookAppointmentPatient>
  },
  {
    path:'/PatDetforbedBook', // this will open after selecting the bed to book then you have to fill the form
    element:<BedBookingForm></BedBookingForm>
  },
  {
    path:'/BedConfirmationPageforPatient', // This is the page which willl open when patient check the bed availbility and then click on the book now for specfic bed from specific hospital then this page will open to tell the condition and ask for details for futhur process and then for payment.
    element:<BedReservationConfirmation></BedReservationConfirmation>
  },
  {
    path:'/Payment', // this is for the payment for bed booking ,appointment booking
    element:<PaymentForm></PaymentForm>
  },
  {
    path:'/Hospitalinformationaftsub',  // this page should come after when they land on the homepage of the hospital (doubt)
    element:<HospitalRegistrationForm></   HospitalRegistrationForm>
  },
  {
    path:'/patientregistration',  // this is the page required to fill by the patient after the registration
    element:<GeneralUseForm></GeneralUseForm>
  },
  {
    path:'/BookAppbyDoctorAfterHospitallist',  //this will contain the list of doctor in that hospita and here they can book the appoointemnt
    element:<BookappointmentByDoctor></BookappointmentByDoctor>
  },
  {
    path:'/inventoryhomepage',
    element:<InventoryHomePage></InventoryHomePage>  //this  is when  hospital press on  inventory button
  },
  {
    path:'/patientbhospital',
    element:<Patientbhospital></Patientbhospital>
  },
  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={allrouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
