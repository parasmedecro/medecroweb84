// this is the page required to fill by the patient after the registration
import React, { useState } from 'react';
import Header from './Header';

export default function GeneralUseForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        contactNumber: '',
        address: '',
        weight: '',
        age: '',
        gender: '',
        medicalHistory: '',
        currentSymptoms: '',
        currentMedications: '',
        allergies: '',
        pastConditions: '',
        surgeries: '',
        familyHistory: '',
        emergencyContactName: '',
        emergencyContactNumber: '',
        preferredDoctor: '',
        mobilityNeeds: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add form submission logic here (API calls, validation, etc.)
    };

    return (
        <div>
            <Header></Header>
            <div className="min-h-screen w-full bg-[#F2E3D5] flex items-center justify-center  p-6">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white  p-8 rounded-lg shadow-lg w-full max-w-lg"
                >
                    <h1 className="text-2xl font-bold mb-6 text-center">General Use Form</h1>

                    {/* User Registration Section */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Contact Number</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Additional Medical Information */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Medical History</label>
                        <textarea
                            name="medicalHistory"
                            value={formData.medicalHistory}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Current Symptoms</label>
                        <textarea
                            name="currentSymptoms"
                            value={formData.currentSymptoms}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Current Medications</label>
                        <textarea
                            name="currentMedications"
                            value={formData.currentMedications}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Allergies</label>
                        <textarea
                            name="allergies"
                            value={formData.allergies}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Past Medical Conditions</label>
                        <textarea
                            name="pastConditions"
                            value={formData.pastConditions}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Surgeries</label>
                        <textarea
                            name="surgeries"
                            value={formData.surgeries}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Family Medical History</label>
                        <textarea
                            name="familyHistory"
                            value={formData.familyHistory}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Emergency Contact Name</label>
                        <input
                            type="text"
                            name="emergencyContactName"
                            value={formData.emergencyContactName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Emergency Contact Number</label>
                        <input
                            type="tel"
                            name="emergencyContactNumber"
                            value={formData.emergencyContactNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Preferred Doctor</label>
                        <input
                            type="text"
                            name="preferredDoctor"
                            value={formData.preferredDoctor}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Mobility Needs</label>
                        <textarea
                            name="mobilityNeeds"
                            value={formData.mobilityNeeds}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
