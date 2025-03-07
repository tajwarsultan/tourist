// // Next.js Component using Tailwind CSS to recreate the design

// const RestrictedPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-900">
//       <div className="text-center">
//       <p className="text-xl md:text-2xl text-red-400 mb-8">
//           For More changes and Updating
//         </p>
//         <h1 className="text-3xl md:text-5xl font-bold text-red-500 mb-6">
//           Website Restricted By Developer
//         </h1>
//         <p className="text-xl md:text-2xl text-red-400 mb-8">
//           Due To Incomplete Payments Of Development.
//         </p>
//         <p className="text-sm md:text-lg text-white mb-4">
//           If you are a site owner, contact the developer and make payment until
//         </p>
//         <p className="text-sm md:text-lg text-white mb-8">
//           After this date all data of website will be lost.
//         </p>
//         <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition">
//           About Dev.
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RestrictedPage;




"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const ImageCarousel = () => {
  return (
    <div>
      <div className="w-full h-screen mx-auto p-4 relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          className="w-full h-full"
        >
          <div className="relative w-full h-screen">
            <Image
              src="/coverpage.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend md:text-sm">Meet The World</p>
          </div>

          {/* <div className="relative w-full h-screen">
              <Image
                src="https://the.ismaili/sites/default/files/styles/carousel_banner/public/image_003.jpg?itok=7lJ_zsmr" // Replace with the correct image path
                // Replace with the correct image path
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Meet New World</p>
            </div> */}
          {/* Image 1 */}
          <div className="relative w-full h-screen">
            <Image
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a8/43/f7/caption.jpg?w=1400&h=-1&s=1" // Replace with the correct image path
              // Replace with the correct image path
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Meet The World</p>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-screen">
            <Image
              src="/pak-china-scaled.jpg" // Replace with the correct image path
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Find The Difference</p>
          </div>

          <div className="relative w-full h-screen">
            <Image
              src="https://images.unsplash.com/photo-1633595726913-68e037dff159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the correct image path
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Find The Difference</p>
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-screen">
            <Image
              src="/astoree.jpg" // Replace with the correct image path
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Discover The Nature</p>
          </div>

          {/* Image 4 */}
          <div className="relative w-full h-screen">
            <Image
              src="/islamabd.jpg"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Tour Pakistan</p>
          </div>

          <div className="relative w-full h-screen">
            <Image
              src="https://images.unsplash.com/photo-1587547131116-a0655a526190?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Tour Pakistan</p>
          </div>
          <div className="relative w-full h-screen">
            <Image
              src="https://i.natgeofe.com/n/95e0a142-5cda-40e4-b89c-040f286da03f/kaghan-valley-swat-pakistan.jpg"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
            <p className="legend">Tour Pakistan</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
