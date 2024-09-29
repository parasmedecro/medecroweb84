// this is for the payment for bed booking ,appointment booking

import React, { useState } from 'react';

const PaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        alert('Payment Processed');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-10 bg-[#3F75FF]">
            <div className="w-full max-w-md p-8 space-y-8 bg-[#91B0FF] rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Payment Information</h2>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-around">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={handlePaymentMethodChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">Credit/Debit Card</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="upi"
                                checked={paymentMethod === 'upi'}
                                onChange={handlePaymentMethodChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">UPI</span>
                        </label>
                    </div>

                    {paymentMethod === 'card' && (
                        <>
                            <div>
                                <label className="block text-gray-700">Cardholder's Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div>
                                    <label className="block text-gray-700">Expiry Date</label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">CVV</label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {paymentMethod === 'upi' && (
                        <div>
                            <label className="block text-gray-700">UPI ID</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example@upi"
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-700">Billing Address</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="123 Main St"
                            required
                        />
                    </div>

                    <div className="flex space-x-4">
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="City"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">State</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="State"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">ZIP/Postal Code</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ZIP Code"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
