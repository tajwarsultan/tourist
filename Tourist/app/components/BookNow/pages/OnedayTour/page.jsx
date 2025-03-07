'use client';
import GlitchButton from "../../../whatsapp/page"
import Image from 'next/image';

const OnedayTour = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
        Murree ,Taxila Museum and Lahore (Day Tours)

        </h1>
        <p className="text-gray-600">Duration: 1 Day</p>
        <p className="text-gray-600">Mode of Transport: Land Travel</p>
      </div>


      <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
  {/* Day Heading */}
  <div className="bg-green-500 text-white px-4 py-2 rounded-t-md">
    <h2 className="text-lg font-bold"> Day Tour to Murree</h2>
  </div>

  {/* Details Section */}
  <div className="bg-gray-100 p-4">
    {/* On This Day Section */}
    <div className="mb-4">
      <h3 className="text-md font-semibold text-gray-800">On this Day</h3>
      <p className="text-sm text-gray-700">Meals included: Breakfast and Lunch</p>
    </div>

    {/* Tour Itinerary */}
    <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
      <li>Pickup from Islamabad early morning.</li>
      <li>Drive to Murree, enjoying scenic views along the way.</li>
      <li>Stop at Patriata (New Murree) for a cable car and chairlift ride.</li>
      <li>Visit Mall Road for shopping and local snacks.</li>
      <li>Explore Kashmir Point for panoramic views of the region.</li>
      <li>Lunch at a local restaurant in Murree.</li>
      <li>Enjoy free time to explore or take a walk in Murree Hills.</li>
      <li>Evening departure back to Islamabad.</li>
    </ul>

    {/* Accommodation Section */}
 

 
  </div>
</div>



    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      {/* Day Heading */}
      <div className="bg-green-500 text-white px-4 py-2 rounded-t-md">
        <h2 className="text-lg font-bold">Day Tour to Taxila Museum</h2>
      </div>

      {/* Image Section */}
      <div className="w-full mt-4">
        <Image src="https://expatstraveltogether.com/wp-content/uploads/2023/09/Taxila_Museum_Entrance-scaled.jpg"
        width={300}
        height={200}
        alt="Taxila Old Museum" className="rounded-md" />
      </div>

      {/* Details Section */}
      <div className="bg-gray-100 p-4 mt-4">
        {/* On This Day Section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold text-gray-800">On this Day</h3>
          <p className="text-sm text-gray-700">Meals included: Breakfast and Lunch</p>
        </div>

        {/* Tour Itinerary */}
        <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
          <li>Pickup from Islamabad early morning.</li>
          <li>Drive to Taxila and visit the ancient archaeological site.</li>
          <li>Explore the Taxila Old Museum, showcasing historical artifacts.</li>
          <li>Visit Dharmarajika Stupa and other ancient ruins nearby.</li>
          <li>Lunch at a local restaurant in Taxila.</li>
          <li>Explore the nearby Jaulian Monastery.</li>
          <li>Return to Islamabad by evening.</li>
        </ul>

      
      </div>
    </div>





    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      {/* Day Heading */}
      <div className="bg-red-500 text-white px-4 py-2 rounded-t-md">
        <h2 className="text-lg font-bold"> Day Tour to Lahore</h2>
      </div>

    
      {/* Details Section */}
      <div className="bg-gray-100 p-4 mt-4">
        {/* On This Day Section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold text-gray-800">On this Day</h3>
          <p className="text-sm text-gray-700">Meals included: Breakfast and Lunch</p>
        </div>

        {/* Tour Itinerary */}
        <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
          <li>Pickup from Islamabad early morning.</li>
          <li>Drive to Lahore and visit the iconic Lahore Fort.</li>
          <li>Explore the Badshahi Mosque and Minar-e-Pakistan.</li>
          <li>Visit Shalimar Gardens, a UNESCO World Heritage Site.</li>
          <li>Lunch at a famous restaurant in Lahore.</li>
          <li>Explore Lahore Museum and Anarkali Bazaar for shopping.</li>
          <li>Return to Islamabad by evening.</li>
        </ul>


  
      </div>

<GlitchButton/>

    </div>




      


      </div>
  );
};

export default OnedayTour;
