import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiVisa, SiApplepay, SiMastercard, SiPaypal } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#14141E] text-white py-10 pb-1">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left px-5">
        {/* Your Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">YOUR ACCOUNT</h3>
          <ul className="space-y-2">
            <li>Personal info</li>
            <li>Orders</li>
            <li>Credit slips</li>
            <li>Addresses</li>
          </ul>
        </div>
        
        {/* Customer Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            <li>Monday to Friday</li>
            <li>10am - 6.30pm (NewYork time)</li>
            <li>+(001) 23 45 67 89</li>
            <li>shopify@zemez.io</li>
          </ul>
        </div>
        
        {/* Our Guarantees Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">OUR GUARANTEES</h3>
          <ul className="space-y-2">
            <li>Shipping in 3 days</li>
            <li>Free returns within 14 days</li>
            <li>Secure payments</li>
          </ul>
        </div>
        
        {/* Our Company Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">OUR COMPANY</h3>
          <ul className="space-y-2">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms and conditions of use</li>
          </ul>
        </div>
      </div>

      {/* Social Media & Payment Methods */}
      <div className="mt-10 text-center">
        <div className="flex justify-between space-x-5 text-xl mb-5">
       
        <div className="flex gaap-4"> <p className="text-sm">© 2025. Powered by Shopify</p>
        </div><div className="flex gap-4">
          <FaFacebookF className="text-blue-600 hover:text-blue-800" />
          <FaTwitter className="text-blue-400 hover:text-blue-600" />
          <FaInstagram className="text-pink-500 hover:text-pink-700" />
          <FaYoutube className="text-red-600 hover:text-red-800" />
          </div><div className="flex gap-4">
          <SiVisa className="text-blue-700" />
          <SiApplepay className="text-black" />
          <SiMastercard className="text-red-600" />
          <SiPaypal className="text-blue-500" />
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;