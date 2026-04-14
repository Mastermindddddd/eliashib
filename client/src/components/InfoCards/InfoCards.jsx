import React from "react";

const InfoCards = () => {
    return (
      <div className="bg-cover bg-center min-h-[500px] flex items-center justify-center px-6 py-12" style={{ backgroundImage: "url('/InfoCards.jpeg')" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Skills Development Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Skills Development</h3>
            <p className="text-sm font-semibold">Relevance and Scarcity:</p>
            <p className="text-gray-700 text-sm mb-4">
              Our focus is on developing skills that are both in high demand and scarce, ensuring that our participants are adequately equipped to enter the workforce or enhance their current positions.
            </p>
            <p className="text-sm font-semibold">Industry-Agnostic Training:</p>
            <p className="text-gray-700 text-sm">
              Our programs are designed to be applicable across various industries, enabling individuals to adapt and transition to different professional environments as required.
            </p>
          </div>
          
          {/* Entrepreneurship Development Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Entrepreneurship Development</h3>
            <p className="text-sm font-semibold">Comprehensive Support:</p>
            <p className="text-gray-700 text-sm mb-4">
              We provide both mentorship and technical assistance to facilitate the growth of startups into thriving enterprises capable of creating employment opportunities and competing globally.
            </p>
            <p className="text-sm font-semibold">Innovation and Competitiveness:</p>
            <p className="text-gray-700 text-sm">
              We foster a culture of innovation, ensuring that entrepreneurs develop competitive products and services that meet market demands.
            </p>
          </div>
          
          {/* Community Empowerment Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Community Empowerment</h3>
            <p className="text-sm font-semibold">Self-Sustaining Communities:</p>
            <p className="text-gray-700 text-sm mb-4">
              Our ultimate objective is to establish self-sustaining communities that possess technical expertise and business acumen, fostering unity and collaboration.
            </p>
            <p className="text-sm font-semibold">Grassroots Impact:</p>
            <p className="text-gray-700 text-sm">
              We implement our interventions at the community level, addressing social and economic challenges holistically to promote long-term growth and independence.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoCards;
  