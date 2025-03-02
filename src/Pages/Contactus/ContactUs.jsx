import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-blue-600">Customer Service</h3>
            <p className="text-gray-700">+09123 456 789</p>
            <p className="text-gray-500">Monday to Friday<br />10am - 6.30pm</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-blue-600">Products & Orders</h3>
            <p className="text-gray-700">+09123 456 789</p>
            <p className="text-gray-500">Monday to Friday<br />10am - 6.30pm</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2 text-blue-600">Store Locator</h3>
            <p className="text-gray-700">Delhi, 110030</p>
          </div>
        </div>

        <div className="space-y-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.566249721855!2d77.1570488752836!3d28.49260657574142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0052446d37%3A0xd4c0b42c99aa6e47!2sKukki%20shop!5e0!3m2!1sen!2sin!4v1740893283681!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-blue-700 mb-4">Have a question about a product, our company, or just want to chat? Email us!</p>
        <p className="text-gray-600 mb-8">We will be glad to assist you with any questions and encourage you to share your ideas and improvements with us.</p>
        <form className="max-w-3xl mx-auto space-y-6 bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg" placeholder="Email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-3 border rounded-lg" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
