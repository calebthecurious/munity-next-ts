import React from "react";

const SplashPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-sunriseOrange to-twilightBlue flex justify-center items-center">
      <div className="text-center">
        {/* Rising Sun Animation */}
        <div className="animate-sunRise mb-4">
          <div className="sun"></div>
        </div>

        {/* Munity Logo */}
        <h1 className="text-5xl font-bold text-white mb-4">Munity</h1>

        {/* Welcome Message */}
        <p className="text-xl text-white">
          Welcome to Munity: Your Neighborhood's Skill Oasis!
        </p>

        {/* Neighborhood Silhouette */}
        <div className="mt-8">
          {/* Add your silhouette image here */}
          <img
            src="/path-to-your-image.png"
            alt="Neighborhood Silhouette"
            className="animate-shadowMovement"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
