import React from "react";
import UserProfile from "../components/UserProfile";
import UpcomingSessions from "../components/UpcomingSessions";
import Notifications from "../components/Notifications";
import QuickLinks from "../components/QuickLinks";

const Dashboard: React.FC = () => {
  // Sample data (you can fetch this from an API or database)
  const user = {
    name: "John Sample",
    email: "john.doe@example.com",
    avatarUrl: "/path/to/avatar.jpg",
  };

  const sessions = [
    { id: 1, title: "Guitar Lesson", date: new Date("2023-09-10") },
    // Add more sessions as needed
  ];

  const notifications = [
    { id: 1, message: "Your session is tomorrow!" },
    // Add more notifications as needed
  ];

  return (
    <div className="dashboard">
      <UserProfile {...user} />
      <UpcomingSessions sessions={sessions} />
      <Notifications notifications={notifications} />
      <QuickLinks />
    </div>
  );
};

export default Dashboard;
