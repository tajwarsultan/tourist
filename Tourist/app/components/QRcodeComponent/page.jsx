"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import pic from "/public/QRcode.gif";
import QRimage from "/public/QRarifkoyani.png";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';

const QRcodeComponent = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  const [QRcode, setQRcode] = useState(false);
  const [loader, setLoader] = useState(true);

  const GenerateQrcode = async () => {
    setLoader(false);
    setTimeout(() => {
      setQRcode(true);
      setLoader(true);
    }, 2000);
  };

  return (
    <div className="w-full bg-[#0b698b] h-screen text-white flex flex-col justify-center items-center gap-10 pt-30">
      <h1 className="font-bold text-[25px] first-letter:black">
        <span className="text-[#d78905]">Generate</span> a QR code and connect with us.
      </h1>
      <div className="h-[300px] flex justify-center items-center">
        {loader ? (
          <span data-aos="fade-up">
            {QRcode ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 1 }}
              >
                <Image src={QRimage} width={200} alt="Generated QR code" />
              </motion.div>
            ) : (
              <div className="W-[50vw] shadow-glow border-2 border-black">
                <Image src={pic} width={700} alt="QR placeholder" />
              </div>
            )}
          </span>
        ) : (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
          />
        )}
      </div>
      <div className="h-[100px]">
        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
          onClick={GenerateQrcode}
          disabled={QRcode}
        >
          {QRcode ? <span>Scan Me</span> : <span>Quick Generate QR Code</span>}
        </button>
      </div>
    </div>
  );
};

export default QRcodeComponent;
