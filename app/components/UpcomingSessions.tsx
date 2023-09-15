import React from "react";

type Session = {
  id: number;
  title: string;
  date: Date;
};

type UpcomingSessionsProps = {
  sessions: Session[];
};

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ sessions }) => {
  return (
    <div className="upcoming-sessions">
      <h3>Upcoming Sessions</h3>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>
            {session.title} on {session.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSessions;
