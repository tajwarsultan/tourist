'use client';
import Image from 'next/image';

const CultureArcheologyCard = () => {
  return (
    <div className="relative  mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
      <div className="relative w-full h-64">
        <Image
          src="/calture.jpg" // Replace with the correct image path
          alt="Culture & Archeology Tours"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Culture & Archeology Tours
        </h2>
      
      </div>
      {/* Inner bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#10603c]"></div>
    </div>
  );
};

export default CultureArcheologyCard;
