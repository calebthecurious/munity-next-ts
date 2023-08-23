import React from "react";

type GuideHeaderProps = {
  name: string;
  avatarUrl: string;
  bio: string;
};

const GuideHeader: React.FC<GuideHeaderProps> = ({ name, avatarUrl, bio }) => {
  return (
    <div className="guide-header">
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default GuideHeader;
