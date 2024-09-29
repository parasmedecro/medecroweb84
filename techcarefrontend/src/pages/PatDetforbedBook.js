// This page will open when patient will click on submit details on page bed booking confirmation page and ask for the details to put and then proceed for the payment.
import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


function BedBookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        phoneNumber: '',
        email: '',
        emergencyContactName: '',
        emergencyContactRelationship: '',
        emergencyContactPhone: '',
        reasonForAdmission: '',
        existingConditions: '',
        currentMedications: '',
        allergies: '',
        primaryCarePhysician: '',
        preferredDate: '',
        preferredRoomType: '',
        specialRequirements: '',
        consentForTreatment: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            {/* header */}
            <Header></Header>
            <div className='w-full h-full pb-24 pt-6 bg-[#cec6bf]'>
                <div className="max-w-xl mx-auto  p-6 bg-[#F2E3D5] rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Hospital Bed Booking Form</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Patient Information */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Emergency Contact Information */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Emergency Contact Name</label>
                            <input
                                type="text"
                                name="emergencyContactName"
                                value={formData.emergencyContactName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Emergency Contact Relationship</label>
                            <input
                                type="text"
                                name="emergencyContactRelationship"
                                value={formData.emergencyContactRelationship}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Emergency Contact Phone</label>
                            <input
                                type="tel"
                                name="emergencyContactPhone"
                                value={formData.emergencyContactPhone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Medical Information */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Reason for Admission</label>
                            <textarea
                                name="reasonForAdmission"
                                value={formData.reasonForAdmission}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Existing Medical Conditions</label>
                            <textarea
                                name="existingConditions"
                                value={formData.existingConditions}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Current Medications</label>
                            <textarea
                                name="currentMedications"
                                value={formData.currentMedications}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Allergies</label>
                            <textarea
                                name="allergies"
                                value={formData.allergies}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Primary Care Physician</label>
                            <input
                                type="text"
                                name="primaryCarePhysician"
                                value={formData.primaryCarePhysician}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Booking Details */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Preferred Date of Admission</label>
                            <input
                                type="date"
                                name="preferredDate"
                                value={formData.preferredDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Preferred Room Type</label>
                            <select
                                name="preferredRoomType"
                                value={formData.preferredRoomType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Room Type</option>
                                <option value="General">General</option>
                                <option value="Semi-Private">Semi-Private</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Special Requirements</label>
                            <textarea
                                name="specialRequirements"
                                value={formData.specialRequirements}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Consent Forms */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Consent for Treatment</label>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="consentForTreatment"
                                    checked={formData.consentForTreatment}
                                    onChange={handleChange}
                                    className="mr-2 leading-tight"
                                />
                                <span className="text-gray-700">I consent to the treatment and procedures.</span>
                            </div>
                        </div>

                        <Link to={'/Payment'}><button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Pay Now
                        </button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BedBookingForm;
