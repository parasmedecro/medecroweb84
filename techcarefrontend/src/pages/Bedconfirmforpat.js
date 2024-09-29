// This is the page which willl open when patient check the bed availbility and then click on the book now for specfic bed from specific hospital then this page will open to tell the condition and ask for details for futhur process and then for payment.

import React from 'react';
import { Link } from 'react-router-dom';

function BedReservationConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">BED RESERVATION CONFIRMATION</h2>
        
        <p className="text-gray-600 mb-6">
          Your booking for a bed is reserved for 1 hour. To confirm your reservation, please visit the hospital for a check-up within the next hour. If you do not arrive within the hour, your booking will be cancelled.
        </p>

        <div className="text-black font-bold text-lg mb-4">
          <h1>Fill The Patient Details For Booking</h1>
          <Link to={'/PatDetforbedBook'}><button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-full mb-6">Details</button></Link>
        </div>

       

        <p className="text-gray-600">
          Secure your booking by making an online payment now. After making the payment, please bring your payment receipt to the hospital for quick processing.
        </p>
      </div>
    </div>
  );
}

export default BedReservationConfirmation;
