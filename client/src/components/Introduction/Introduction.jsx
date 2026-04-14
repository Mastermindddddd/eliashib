import React from "react";

const Introduction = () => {
  return (
    <div className="w-full bg-white text-black flex flex-col justify-evenly py-16 sm:py-20 space-y-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Introduction Section */}
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Introduction</h2>
        <div className="w-16 sm:w-24 border-b-4 border-primary mx-auto"></div>

        <div className="mt-6 space-y-6">
          <p className="text-gray-700 leading-relaxed text-left">
            A society’s full functionality necessitates the comprehensive addressing of 
            social, economic, and political factors in an effective manner. Our communities 
            are actively seeking effective solutions to transition from survivalism to self-sufficiency. 
            Numerous research endeavors have unequivocally demonstrated the widespread and profound nature 
            of social issues. To address these social challenges, an integrated approach is paramount, requiring 
            a deep understanding of the underlying causes. Social development interventions must be grounded at the 
            grassroots level and deeply embedded within the fabric of society.
          </p>

          <p className="text-gray-700 leading-relaxed text-left">
            The economic landscape is undergoing a rapid transformation, leaving many families 
            and individuals behind. This disparity further hinders societies’ ability to derive 
            economic benefits. Numerous economic development programs have failed to yield the 
            anticipated outcomes, resulting in stagnant economic growth. We are witnessing escalating 
            levels of poverty and an increasing number of individuals being excluded from the economy, 
            whether through business ownership or formal employment.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="w-full max-w-6xl mx-auto flex justify-end">
        <a href="#contact-us">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-200">
            Contact Us For A Discovery Call
          </button>
        </a>
      </div>

      {/* Full-width Banner Image */}
      <img 
        src="/banner.png" 
        loading="lazy"
        alt="Invest in Growth Banner"
        className="w-full object-cover max-h-80 sm:max-h-96 md:max-h-[500px] lg:max-h-[600px]"
      />
    </div>
  );
};

export default Introduction;
