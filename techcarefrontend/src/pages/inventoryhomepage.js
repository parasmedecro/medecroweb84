// import React from 'react';

// export default function InventoryHomePage(){
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 text-white py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Hospital Inventory Management</h1>
//           <button className="bg-white text-blue-600 px-4 py-2 rounded">Logout</button>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="container mx-auto py-8">
//         {/* Dashboard Summary */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Total Items</h3>
//             <p className="text-4xl font-bold">500</p>
//           </div>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Low Stock Alerts</h3>
//             <p className="text-4xl font-bold text-red-500">10</p>
//           </div>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Expiring Soon</h3>
//             <p className="text-4xl font-bold text-yellow-500">5</p>
//           </div>
//         </section>

//         {/* Quick Links */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <a href="/inventory" className="bg-blue-600 text-white p-6 text-center shadow rounded-lg hover:bg-blue-700">
//               Manage Inventory
//             </a>
//             <a href="/add-item" className="bg-green-600 text-white p-6 text-center shadow rounded-lg hover:bg-green-700">
//               Add New Item
//             </a>
//             <a href="/reports" className="bg-gray-600 text-white p-6 text-center shadow rounded-lg hover:bg-gray-700">
//               View Reports
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Hospital Inventory Management. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };


// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 text-white py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Hospital Inventory Management</h1>
//           <button className="bg-white text-blue-600 px-4 py-2 rounded">Logout</button>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="container mx-auto py-8">
//         {/* Dashboard Summary */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Total Items</h3>
//             <p className="text-4xl font-bold">500</p>
//           </div>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Low Stock Alerts</h3>
//             <p className="text-4xl font-bold text-red-500">10</p>
//           </div>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Expiring Soon</h3>
//             <p className="text-4xl font-bold text-yellow-500">5</p>
//           </div>
//         </section>

//         {/* Quick Links */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <a href="/inventory" className="bg-blue-600 text-white p-6 text-center shadow rounded-lg hover:bg-blue-700">
//               Manage Inventory
//             </a>
//             <a href="/add-item" className="bg-green-600 text-white p-6 text-center shadow rounded-lg hover:bg-green-700">
//               Add New Item
//             </a>
//             <a href="/reports" className="bg-gray-600 text-white p-6 text-center shadow rounded-lg hover:bg-gray-700">
//               View Reports
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Hospital Inventory Management. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';

// const HomePage = () => {
//   // Sample data for recent activities and notifications
//   const [recentActivities, setRecentActivities] = useState([
//     { id: 1, activity: 'Added 50 units of Paracetamol' },
//     { id: 2, activity: 'Updated Insulin quantity to 100' },
//     { id: 3, activity: 'Deleted expired Aspirin' },
//   ]);

//   const [notifications, setNotifications] = useState([
//     { id: 1, message: 'Low stock on Surgical Gloves', type: 'warning' },
//     { id: 2, message: 'Insulin expiring soon', type: 'danger' },
//   ]);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 text-white py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Hospital Inventory Management</h1>
//           <button className="bg-white text-blue-600 px-4 py-2 rounded">Logout</button>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="container mx-auto py-8">
//         {/* Search Bar */}
//         <section className="mb-8">
//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Search Inventory..."
//               className="px-4 py-2 w-full md:w-1/3 border rounded"
//             />
//             <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Search
//             </button>
//           </div>
//         </section>

//         {/* Dashboard Summary */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Total Items</h3>
//             <p className="text-4xl font-bold">500</p>
//           </div>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Low Stock Alerts</h3>
//             <p className="text-4xl font-bold text-red-500">10</p>
//           </div>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">Expiring Soon</h3>
//             <p className="text-4xl font-bold text-yellow-500">5</p>
//           </div>
//         </section>

//         {/* Notifications */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
//           <div className="space-y-4">
//             {notifications.map(notification => (
//               <div
//                 key={notification.id}
//                 className={`p-4 rounded-lg shadow ${
//                   notification.type === 'warning'
//                     ? 'bg-yellow-200'
//                     : 'bg-red-200'
//                 }`}
//               >
//                 <p className="text-sm font-medium">{notification.message}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Recent Activity */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
//           <div className="bg-white p-6 shadow rounded-lg">
//             <ul className="space-y-3">
//               {recentActivities.map(activity => (
//                 <li key={activity.id} className="text-sm">
//                   {activity.activity}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* Progress Bars (Stock Usage) */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Stock Usage</h2>
//           <div className="space-y-4">
//             <div>
//               <p className="font-semibold">Paracetamol</p>
//               <div className="w-full bg-gray-200 rounded h-4 mb-2">
//                 <div
//                   className="bg-blue-600 h-4 rounded"
//                   style={{ width: '75%' }}
//                 ></div>
//               </div>
//             </div>
//             <div>
//               <p className="font-semibold">Surgical Gloves</p>
//               <div className="w-full bg-gray-200 rounded h-4 mb-2">
//                 <div
//                   className="bg-blue-600 h-4 rounded"
//                   style={{ width: '40%' }}
//                 ></div>
//               </div>
//             </div>
//             <div>
//               <p className="font-semibold">Insulin</p>
//               <div className="w-full bg-gray-200 rounded h-4 mb-2">
//                 <div
//                   className="bg-blue-600 h-4 rounded"
//                   style={{ width: '90%' }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Hospital Inventory Management. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import Header from './Header';
import Footer from './Fotter';

const ManageInventoryPage = () => {
  // Sample inventory data
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Paracetamol', category: 'Medicine', quantity: 50, expirationDate: '2024-05-01' },
    { id: 2, name: 'Surgical Gloves', category: 'Consumables', quantity: 200, expirationDate: '2025-01-01' },
    { id: 3, name: 'Insulin', category: 'Medicine', quantity: 100, expirationDate: '2024-12-01' },
  ]);

  // Handle delete
  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  // Render inventory table
  return (
    <div>
      <Header></Header>
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Manage Inventory</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded">Logout</button>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-8">
        {/* Add New Item Button */}
        <div className="flex justify-end mb-4">
          <a href="/add-item" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add New Item
          </a>
        </div>

        {/* Inventory Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Item Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Expiration Date</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.name}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.category}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.quantity}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.expirationDate}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Edit</button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ManageInventoryPage;