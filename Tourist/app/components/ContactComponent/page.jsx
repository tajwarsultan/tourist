"use client";
import React from "react";
import whatsapp from "/public/whatspp.png";
import Image from "next/image";
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import Link from "next/link";



const ContactComponent = () => {
  return (
    <div className="bg-[#0b698b] text-white py-10">
      <div className="container mx-auto px-6 ">
        <h1 className="text-3xl font-bold text-center mb-8">Get in Touch with Travel at Ease</h1>
        <div className="flex flex-col md:flex-row justify-around gap-5 items-start">
          <div className="bg-[#213a71] text-[14px]  flex flex-col p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Resident Office</h2>
            <p className="mb-2">Islamabad, Pakistan</p>
            <div className="flex items-center space-x-2 py-1 mb-1">
            <FiPhone />
            <span className="text-[16px]">+92-51-4106110</span>
          </div>
            {/* <p>Email: <a href="mailto:travelatease.tae@gmail.com" className="underline hover:text-yellow-300">travelatease.tae@gmail.com</a></p> */}
            <div className="mb-1">
              <div className="flex items-center pt-1 space-x-1">
                <FiMail />
                <span className="text-[12px] pl-2">travelatease.tae@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Regional Office Section */}
          <div className="bg-[#213a71]   p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Regional Office</h2>
            <p className="mb-2">Karimabad, Hunza, Pakistan</p>
            {/* <div className="flex items-center space-x-4 py-2">
            <FiPhone />
            <span className="text-[16px]">+92-514106110</span>
          </div> */}
            <div className="flex items-center gap-5  mt-2  mb-2">
              <Image src={whatsapp} width={20} height={20} alt="phone icon" />
              <span>+92-3350823823</span>
            </div>
            <div className="flex justify-cente items-center">
            <FiMail />

               <a href="mailto:travelatease.tae@gmail.com" className=" pl-4 underline-none  hover:text-yellow-300">travelatease.tae@gmail.com</a></div>
              
            <div className="flex items-center space-x-2">
              <FaGlobe />
              <span className="text-[16px] pl-3">
                <Link href="https://www.tae.com.pk" target="_blank" className="hover:underline">
                  www.tae.com.pk
                </Link>
              </span>
            </div>
          </div>
          {/* Helper Center Section */}
          <div className="bg-[#213a71] p-6 rounded-lg  text-[12px] shadow-lg mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Helper Center</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">Community</li>
              <li className="mb-1">Knowledge Base</li>
              <li className="mb-1">Videos</li>
              <li className="mb-1">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
