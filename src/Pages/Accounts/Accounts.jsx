import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating fetching user data from local storage or API
    const loggedInUser = null; // Set null to simulate no user logged in
    setUser(loggedInUser);
  }, []);

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-bold mb-10 text-black">My Account</h2>
        <motion.div
          className="shadow-lg rounded-2xl overflow-hidden bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-10 grid grid-cols-1 gap-6">
            {user ? (
              <>
                <div>
                  <label className="block text-lg font-semibold mb-2">Full Name</label>
                  <input type="text" value={user.fullName} readOnly className="w-full p-3 border rounded-lg bg-gray-200" />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">Email Address</label>
                  <input type="email" value={user.email} readOnly className="w-full p-3 border rounded-lg bg-gray-200" />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">Phone Number</label>
                  <input type="text" value={user.phone} readOnly className="w-full p-3 border rounded-lg bg-gray-200" />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">Password</label>
                  <input type="password" value={user.password} readOnly className="w-full p-3 border rounded-lg bg-gray-200" />
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">Update Details</button>
              </>
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold mb-6">Please log in to view your account details.</p>
                <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">Login</button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccountPage;
