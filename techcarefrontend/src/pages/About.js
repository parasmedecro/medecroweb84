import React from 'react';
import Header from './Header';
import Footer from './Fotter';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>

            <div className="bg-[#F2E3D5] min-h-screen p-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    {/* About Us Section with Blue Background */}
                    <div className="bg-blue-900 p-6 rounded-md text-center mb-8">
                        <h1 className="text-4xl font-bold text-white">About Us</h1>
                        <p className="text-blue-300 mt-2">
                            Revolutionizing Healthcare Management with Innovative Solutions
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p className="text-gray-700">
                            We provide a comprehensive suite of tools including patient registration, appointment scheduling, doctor profile management, and integrated health information systems to improve the efficiency of healthcare services.
                        </p>
                    </div>

                    <div className="mb-8 bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl font-semibold text-center mb-4">Core Features</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                            <span className="text-gray-700">Patient Management</span>
                            <span className="text-gray-700">Hospital and Clinic Registration</span>
                            <span className="text-gray-700">Doctor Registration</span>
                            <span className="text-gray-700">Bed and Inventory Management</span>
                            <span className="text-gray-700">City-Wide Health Integration</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                        <p className="text-gray-700">
                            A personal accident in a college hostel, where I fell and broke my hand with no immediate help, inspired the creation of Techcare. This platform ensures that no one faces medical emergencies alone by connecting patients with hospitals, clinics, and doctors swiftly. Our mission is to make timely healthcare accessible to everyone, bridging the gap between those in need and the medical assistance they require.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center">
                            <div>
                                <img src="path-to-image.jpg" alt="Chhavi Bhatt" className="w-full h-24 object-cover rounded-md mb-2" />
                                <span className="text-gray-700">Chhavi Bhatt</span>
                            </div>
                            <div>
                                <img src="path-to-image.jpg" alt="Uzair Khan" className="w-full h-24 object-cover rounded-md mb-2" />
                                <span className="text-gray-700">Uzair Khan</span>
                            </div>
                            <div>
                                <img src="path-to-image.jpg" alt="Kunal Kumar" className="w-full h-24 object-cover rounded-md mb-2" />
                                <span className="text-gray-700">Kunal Kumar</span>
                            </div>
                            <div>
                                <img src="path-to-image.jpg" alt="Anshita Kapkoti" className="w-full h-24 object-cover rounded-md mb-2" />
                                <span className="text-gray-700">Anshita Kapkoti</span>
                            </div>
                            <div>
                                <img src="path-to-image.jpg" alt="Harshita Sharma" className="w-full h-24 object-cover rounded-md mb-2" />
                                <span className="text-gray-700">Harshita Sharma</span>
                            </div>
                            <div>
                                <img src="path-to-image.jpg" alt="Jay Kumar" className="w-full h-24 object-cover rounded-md mb-2" />
                                <span className="text-gray-700">Jay Kumar</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Our Vision for the Future</h2>
                        <p className="text-gray-700">
                            Looking ahead, we are committed to expanding our platform’s capabilities, integrating advanced technologies like AI and machine learning to further enhance hospital management and patient care.
                        </p>
                    </div>

                    <div className="text-center bg-gray-800 text-white py-4 rounded-md">
                        <p>
                            For more information, feel free to reach out to us at <a href="mailto:info@website.com" className="text-blue-400">info@website.com</a> or call us at <a href="tel:+6206500604" className="text-blue-400">[6206500604]</a>
                        </p>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;