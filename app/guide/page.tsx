"use client";

import { IconType } from "react-icons";
import { SafeUser } from "@/app/types";

import Avatar from "../components/Avatar";

interface Skill {
  icon: IconType;
  label: string;
}

interface GuideProfileProps {
  guide: SafeUser;
  skills: Skill[];
  experience: string;
  rating: number; // 1-5 for simplicity, can be extended later
}

const GuideProfile: React.FC<GuideProfileProps> = ({
  guide,
  skills,
  experience,
  rating,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <Avatar src={guide?.image} />
          <div className="">{guide?.name}</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-2">
        {skills.map((skill) => (
          <div key={skill.label} className="flex items-center gap-2">
            <skill.icon />
            <div className="font-light">{skill.label}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="text-lg font-light text-neutral-500">{experience}</div>
      <hr />
      <div className="flex flex-row items-center gap-2">
        {"★".repeat(rating)} {/* Simple star rating for illustration */}
        <div className="font-light">({rating}/5)</div>
      </div>
    </div>
  );
};

export default GuideProfile;
