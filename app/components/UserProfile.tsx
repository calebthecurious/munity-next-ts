import React from "react";

type UserProfileProps = {
  name: string;
  email: string;
  avatarUrl: string;
};

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  avatarUrl,
}) => {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;
