import React from "react";

const ProfilePage: React.FC = () => {
  // This is a mock state. In a real-world scenario, you'd fetch this data from your backend.
  const user = {
    isGuide: true, // This indicates if the user is also a guide.
    // ... other user data
  };

  return (
    <div className="p-4">
      {/* 1. Profile Header */}
      <div className="flex items-center mb-6">
        <img
          src="/path-to-profile-pic.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">Username</h2>
          <p>Status: Online</p>
        </div>
      </div>

      {/* 2. Personal Information */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Personal Information</h3>
        <p>Full Name: John Doe</p>
        <p>Bio: Web Developer from NYC</p>
        <p>Location: New York, USA</p>
        <p>Join Date: January 2022</p>
        <p>Email: john@example.com</p>
      </div>

      {/* 3. Activity & Stats */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Activity & Stats</h3>
        <p>Posts: 120</p>
        <p>Followers: 300 | Following: 150</p>
        {/* Add badges and ratings here */}
      </div>

      {/* 4. Action Buttons */}
      <div className="mb-6 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Settings
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div>

      {/* 5. User Content */}
      {/* Add recent posts, photos, and saved content components here */}

      {/* 6. Social Links */}
      <div className="mb-6">
        <a href="#" className="mr-4">
          Twitter
        </a>
        <a href="#">Instagram</a>
      </div>

      {/* 7. Contact & Communication */}
      <div className="mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-2">
          Message
        </button>
        <p>Contact Info: 123-456-7890</p>
      </div>

      {/* 8. Additional Features */}

      {/* ... (rest of the profile sections from the previous code) ... */}

      {/* Guide-specific sections */}
      {user.isGuide && (
        <>
          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Skills Offered</h3>
            <p>Web Development, Guitar Lessons, Gardening</p>
          </div>

          {/* Availability Calendar */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Availability</h3>
            {/* You can integrate a calendar component here */}
            <p>
              Available on Mondays, Wednesdays, and Fridays from 10am to 4pm
            </p>
          </div>

          {/* Portfolio */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            {/* Display the user's work, projects, or accomplishments */}
            <p>
              Developed 10+ websites, Taught guitar to 50+ students, Designed 5
              gardens
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Testimonials</h3>
            {/* Display positive feedback or endorsements from other users or clients */}
            <p>"John is an excellent web developer!" - Alice</p>
            <p>"Learned a lot from his guitar lessons!" - Bob</p>
          </div>

          {/* Followers/Following Activity Feed */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Activity Feed</h3>
            {/* Display recent activity from the user's network */}
            <p>John started offering a new skill: Piano Lessons</p>
            <p>Alice booked a web development session with John</p>
          </div>
        </>
      )}
      {/* Add skills, calendar, portfolio, testimonials, and activity feed components here */}
    </div>
  );
};

export default ProfilePage;
