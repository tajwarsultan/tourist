"use client";
import Image from "next/image";
import Link from "next/link";


const SkarduHunza = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Front_view_of_Baltit_Fort%2C_Hunza%2C_Gilgit-Baltistan%2C_Pakistan.jpg" // Replace with the actual image path or URL
          alt="K2 Base Camp Trek"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mt-16">
      Skardu & Hunza (Luxury - 10 Days)
      </h2>

    

      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 mb-4">
        Hunza City Camp Trek (2024-25) – 10 days <br />
        Hunza City  trek is the most popular trekking holiday for{" "}
        <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
        <Link href="/components/BookNow/pages/HunzaAndSkardu" target="_blank">
        
          More info
        </Link>
        </span>
      </p>

      {/* Divider */}
      <hr className="my-2" />

      {/* Book Now Button */}

      <Link 
      href="https://wa.me/+923350823823" target="_blank"
      >
      
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
        BOOK NOW
      </button>

      </Link>

    </div>
  );
};

export default SkarduHunza;
