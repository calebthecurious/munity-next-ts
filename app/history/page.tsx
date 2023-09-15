// app/history/page.tsx

"use client";

import React, { useState } from "react";

interface Session {
  id: number;
  title: string;
  date: Date;
  status: "past" | "upcoming";
}

const BookingHistoryPage: React.FC = () => {
  // Dummy sessions data
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: 1,
      title: "Guitar Lesson with Alice",
      date: new Date("2023-04-20"),
      status: "past",
    },
    {
      id: 2,
      title: "Cooking Class with Bob",
      date: new Date("2023-04-25"),
      status: "upcoming",
    },
    {
      id: 3,
      title: "Dance Session with Charlie",
      date: new Date("2023-04-28"),
      status: "upcoming",
    },
  ]);

  const handleReschedule = (sessionId: number) => {
    // Logic for rescheduling the session
    console.log(`Reschedule session with id: ${sessionId}`);
    // Typically, you would connect to your backend here to make the necessary updates
  };

  const handleCancel = (sessionId: number) => {
    // Logic for cancelling the session
    console.log(`Cancel session with id: ${sessionId}`);
    // Update the state or connect to your backend to cancel the session
    setSessions((prevSessions) =>
      prevSessions.filter((session) => session.id !== sessionId)
    );
  };

  return (
    <div className="container mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Booking History</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session.id} className="p-4 border rounded-md mb-4">
            <h3 className="text-xl">{session.title}</h3>
            <p>{session.date.toLocaleDateString()}</p>
            {session.status === "upcoming" && (
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                  onClick={() => handleReschedule(session.id)}
                >
                  Reschedule
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleCancel(session.id)}
                >
                  Cancel
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistoryPage;
