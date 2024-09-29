import React, { useState } from 'react';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const HospitalRegistrationForm = () => {
    const [formData, setFormData] = useState({
        hospitalName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        contactNumber: '',
        email: '',
        hospitalType: '',
        registrationNumber: '',
        administratorName: '',
        adminContactNumber: '',
        adminEmail: '',
        bedDetails: [{ bedType: '', totalBeds: '' }],
        doctors: [{ name: '', specialization: '', experience: '', availability: '', contactInfo: '' }],
        services: '',
        visitingHours: '',
        parkingAvailability: false,
        otherFacilities: '',
        appointmentSlots: '',
        appointmentTypes: '',
        cancellationPolicy: '',
        insuranceInfo: '',
        paymentOptions: '',
        telemedicineCapabilities: false,
        accreditation: '',
        insuranceCertificates: '',
        termsAgreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleBedChange = (index, e) => {
        const { name, value } = e.target;
        const updatedBedDetails = formData.bedDetails.map((bed, i) =>
            i === index ? { ...bed, [name]: value } : bed
        );
        setFormData({ ...formData, bedDetails: updatedBedDetails });
    };

    const addBedType = () => {
        setFormData({
            ...formData,
            bedDetails: [...formData.bedDetails, { bedType: '', totalBeds: '' }],
        });
    };

    const handleDoctorChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDoctors = formData.doctors.map((doctor, i) =>
            i === index ? { ...doctor, [name]: value } : doctor
        );
        setFormData({ ...formData, doctors: updatedDoctors });
    };

    const addDoctor = () => {
        setFormData({
            ...formData,
            doctors: [...formData.doctors, { name: '', specialization: '', experience: '', availability: '', contactInfo: '' }],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        // saving the data in the object  by api

        try {
            const response = await axios.post('http://localhost:8084/api/rHospital/savehospitalreg',
                {
                    hospitalName: formData.hospitalName,
                    address: formData.address,
                    city: formData.city,
                    state: formData.state,
                    zipCode: formData.zipCode,
                    contactNumber: formData.contactNumber,
                    email: formData.email,
                    hospitalType: formData.hospitalType,
                    registrationNumber: formData.registrationNumber,
                    administratorName: formData.administratorName,
                    adminContactNumber: formData.adminContactNumber,
                    adminEmail: formData.adminEmail,
                    bedDetails: formData.bedDetails.map(bed => ({
                        bedType: bed.bedType,
                        totalBeds: bed.totalBeds,
                    })),
                    doctors: formData.doctors.map(doctor => ({
                        name: doctor.name,
                        specialization: doctor.specialization,
                        experience: doctor.experience,
                        availability: doctor.availability,
                        contactInfo: doctor.contactInfo,
                    })),
                    services: formData.services,
                    visitingHours: formData.visitingHours,
                    parkingAvailability: formData.parkingAvailability,
                    otherFacilities: formData.otherFacilities,
                    appointmentSlots: formData.appointmentSlots,
                    appointmentTypes: formData.appointmentTypes,
                    cancellationPolicy: formData.cancellationPolicy,
                    insuranceInfo: formData.insuranceInfo,
                    paymentOptions: formData.paymentOptions,
                    telemedicineCapabilities: formData.telemedicineCapabilities,
                    accreditation: formData.accreditation,
                    insuranceCertificates: formData.insuranceCertificates,
                    termsAgreement: formData.termsAgreement,


                }


            );

            if (response.status === 200) {
                toast.success(response.data.message);
                // Clear the form or redirect as needed
            }
            setFormData({
                hospitalName: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                contactNumber: '',
                email: '',
                hospitalType: '',
                registrationNumber: '',
                administratorName: '',
                adminContactNumber: '',
                adminEmail: '',
                bedDetails: [{ bedType: '', totalBeds: '' }],
                doctors: [{ name: '', specialization: '', experience: '', availability: '', contactInfo: '' }],
                services: '',
                visitingHours: '',
                parkingAvailability: false,
                otherFacilities: '',
                appointmentSlots: '',
                appointmentTypes: '',
                cancellationPolicy: '',
                insuranceInfo: '',
                paymentOptions: '',
                telemedicineCapabilities: false,
                accreditation: '',
                insuranceCertificates: '',
                termsAgreement: false,
            }

            )


        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || 'Failed to save data');
        }
    };

    return (

        <div>
            <Header></Header>
            <ToastContainer></ToastContainer>
            <div className='bg-[#F3ECE5] py-16'>


                <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hospital Registration</h2>

                    {/* Hospital Information */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Hospital Name</label>
                        <input
                            type="text"
                            name="hospitalName"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.hospitalName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">State</label>
                        <input
                            type="text"
                            name="state"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">ZIP Code</label>
                        <input
                            type="text"
                            name="zipCode"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contact Number</label>
                        <input
                            type="text"
                            name="contactNumber"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Hospital Type</label>
                        <input
                            type="text"
                            name="hospitalType"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.hospitalType}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Hospital Registration Number</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Administrator Information */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Administrator Name</label>
                        <input
                            type="text"
                            name="administratorName"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.administratorName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Administrator Contact Number</label>
                        <input
                            type="text"
                            name="adminContactNumber"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.adminContactNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Administrator Email</label>
                        <input
                            type="email"
                            name="adminEmail"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.adminEmail}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Bed Information */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">Bed Details</h3>
                        {formData.bedDetails.map((bed, index) => (
                            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
                                <div className="mb-2">
                                    <label className="block text-gray-700">Type of Bed</label>
                                    <input
                                        type="text"
                                        name="bedType"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={bed.bedType}
                                        onChange={(e) => handleBedChange(index, e)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700">Total Number of Beds</label>
                                    <input
                                        type="number"
                                        name="totalBeds"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={bed.totalBeds}
                                        onChange={(e) => handleBedChange(index, e)}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="text-blue-500"
                            onClick={addBedType}
                        >
                            + Add Bed Type
                        </button>
                    </div>

                    {/* Doctor Information */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">Doctors</h3>
                        {formData.doctors.map((doctor, index) => (
                            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
                                <div className="mb-2">
                                    <label className="block text-gray-700">Doctor's Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={doctor.name}
                                        onChange={(e) => handleDoctorChange(index, e)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700">Specialization</label>
                                    <input
                                        type="text"
                                        name="specialization"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={doctor.specialization}
                                        onChange={(e) => handleDoctorChange(index, e)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={doctor.experience}
                                        onChange={(e) => handleDoctorChange(index, e)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700">Availability</label>
                                    <input
                                        type="text"
                                        name="availability"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={doctor.availability}
                                        onChange={(e) => handleDoctorChange(index, e)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700">Contact Information</label>
                                    <input
                                        type="text"
                                        name="contactInfo"
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                        value={doctor.contactInfo}
                                        onChange={(e) => handleDoctorChange(index, e)}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="text-blue-500"
                            onClick={addDoctor}
                        >
                            + Add Doctor
                        </button>
                    </div>

                    {/* Additional Information */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Services</label>
                        <input
                            type="text"
                            name="services"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.services}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Visiting Hours</label>
                        <input
                            type="text"
                            name="visitingHours"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.visitingHours}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="parkingAvailability"
                                className="form-checkbox"
                                checked={formData.parkingAvailability}
                                onChange={handleChange}
                            />
                            <span className="ml-2 text-gray-700">Parking Availability</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Other Facilities</label>
                        <input
                            type="text"
                            name="otherFacilities"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.otherFacilities}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Appointment Slots</label>
                        <input
                            type="text"
                            name="appointmentSlots"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.appointmentSlots}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Appointment Types</label>
                        <input
                            type="text"
                            name="appointmentTypes"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.appointmentTypes}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Cancellation Policy</label>
                        <input
                            type="text"
                            name="cancellationPolicy"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.cancellationPolicy}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Insurance Information</label>
                        <input
                            type="text"
                            name="insuranceInfo"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.insuranceInfo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Payment Options</label>
                        <input
                            type="text"
                            name="paymentOptions"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.paymentOptions}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="telemedicineCapabilities"
                                className="form-checkbox"
                                checked={formData.telemedicineCapabilities}
                                onChange={handleChange}
                            />
                            <span className="ml-2 text-gray-700">Telemedicine Capabilities</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Accreditation</label>
                        <input
                            type="text"
                            name="accreditation"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.accreditation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Insurance Certificates</label>
                        <input
                            type="text"
                            name="insuranceCertificates"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            value={formData.insuranceCertificates}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="termsAgreement"
                                className="form-checkbox"
                                checked={formData.termsAgreement}
                                onChange={handleChange}
                            />
                            <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HospitalRegistrationForm;
