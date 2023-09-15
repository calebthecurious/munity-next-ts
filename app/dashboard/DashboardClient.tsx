"use client";

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeUser } from "../types";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface DashboardClientProps {
  currentUser?: SafeUser | null;
}

const DashboardClient: React.FC<DashboardClientProps> = ({ currentUser }) => {
  const router = useRouter();

  return (
    <Container>
      <Heading
        title="My Dashboard"
        subtitle="Track your progress and connect with guides"
      />

      {/* Profile Overview */}
      <div className="flex mt-8">
        <img
          src={currentUser?.image}
          alt="Profile"
          className="rounded-full w-24 h-24"
        />
        <div className="ml-6">
          <h2 className="text-xl font-bold">{currentUser?.name}</h2>
          <div className="mt-2">
            <progress value="70" max="100" className="w-full"></progress>
            <span className="text-sm">Overall Progress: 70%</span>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary">Start a New Skill</button>
            <button className="btn btn-secondary ml-4">View Messages</button>
          </div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Currently Learning</h3>
        {/* This section can be populated similarly to your reservations using a map function */}
      </div>

      {/* Recent Activities */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Recent Activities</h3>
        {/* This section can be populated with a list of recent activities */}
      </div>

      {/* Sidebar (Optional based on design preference) */}
      {/* ... */}
    </Container>
  );
};

export default DashboardClient;
