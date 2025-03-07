'use client';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';


const AboutUsCard = () => {
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-xl border-[1px] border-[#10623d] p-6">
      <div className="flex justify-center">
        <div className="bg-[#10623d] rounded-full p-4">
          {/* Replace the Image component with an icon from react-icons */}
          <FaInstagram size={40} color="white" /> {/* Example: Instagram icon */}
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold text-gray-700 mt-4 mb-4">
        About Us
      </h2>
  
      <p className="text-center text-gray-600 text-sm">
      We are an energetic team of dedicated young professionals with a deep understanding of the tourism industry. Our commitment to exceptional service enables us to offer a wide variety of enjoyable and adventurous experiences for our valued clients.
      </p>
      <div className="flex justify-center mt-6">

      <Link href="/components/aboutUs">

      <button className="bg-[#10623d] text-[12px] text-white py-1 px-4 rounded-full hover:bg-[#18925b] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Learn More
</button>
</Link>

      </div>
    </div>
  );
};

export default AboutUsCard;
