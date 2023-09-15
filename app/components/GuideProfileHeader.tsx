import React from "react";

type GuideProfileHeaderProps = {
  name: string;
  avatarUrl: string;
  description: string;
};

const GuideProfileHeader: React.FC<GuideProfileHeaderProps> = ({
  name,
  avatarUrl,
  description,
}) => {
  return (
    <div className="guide-profile-header">
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button>Book a Session</button>
    </div>
  );
};

export default GuideProfileHeader;
