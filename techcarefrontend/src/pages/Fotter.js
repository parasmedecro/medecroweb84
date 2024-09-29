import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="col-span-1">
            <h3 className="text-yellow-500 font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We Provide High-Quality Services to Improve Your Life. Our Mission
              Is To Bring The Best Solutions To Our Customers!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-yellow-500 font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-yellow-500">HOME</a></li>
              <li><a href="#" className="hover:text-yellow-500">SERVICES</a></li>
              <li><a href="#" className="hover:text-yellow-500">ABOUT US</a></li>
              <li><a href="#" className="hover:text-yellow-500">CONTACT</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-span-1">
            <h3 className="text-yellow-500 font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: Support@Example.Com</p>
            <p className="text-sm">Phone: +123-456-7890</p>
            <div className="flex space-x-4 mt-4">
              {/* Icons can be replaced with actual icons from FontAwesome or other libraries */}
              <a href="#" className="text-white hover:text-yellow-500">IG</a>
              <a href="#" className="text-white hover:text-yellow-500">FB</a>
              <a href="#" className="text-white hover:text-yellow-500">TW</a>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="col-span-1">
            <h3 className="text-yellow-500 font-bold mb-4">Subscribe To Our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="E-mail..."
                className="p-2 rounded-md border-none focus:outline-none"
              />
              <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          © 2024 Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
