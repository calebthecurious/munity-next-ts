"use client";

import Container from "../Container";

import { TbBeach, TbWood, TbYoga, TbCode } from "react-icons/tb";
import {
  GiWindmill,
  GiGardeningShears,
  GiCookingPot,
  GiSewingMachine,
  GiSewingNeedle,
  GiGrandPiano,
  GiPaintBrush,
  GiPhotoCamera,
  GiPencil,
  GiHairStrands,
  GiPublicSpeaker,
} from "react-icons/gi";
import {
  MdOutlineVilla,
  MdLanguage,
  MdFitnessCenter,
  MdHomeRepairService,
} from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";

import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Gardening",
    icon: GiGardeningShears,
    description: "This property is close to the beach!",
  },
  {
    label: "Cooking",
    icon: GiCookingPot,
    description: "This property is close to the windmill!",
  },
  {
    label: "Woodworking",
    icon: TbWood,
    description: "This property is close to the modern!",
  },
  {
    label: "Sewing",
    icon: GiSewingMachine,
    description: "This property is close to the beach!",
  },
  {
    label: "Knitting or Crocheting",
    icon: GiSewingNeedle,
    description: "This property is close to the windmill!",
  },
  {
    label: "Language",
    icon: MdLanguage,
    description: "This property is close to the modern!",
  },
  {
    label: "Musical instrument",
    icon: GiGrandPiano,
    description: "This property is close to the beach!",
  },
  {
    label: "Painting or drawing",
    icon: GiPaintBrush,
    description: "This property is close to the windmill!",
  },
  {
    label: "Fitness",
    icon: MdFitnessCenter,
    description: "This property is close to the modern!",
  },
  {
    label: "Home repair",
    icon: MdHomeRepairService,
    description: "This property is close to the beach!",
  },
  {
    label: "Photography",
    icon: GiPhotoCamera,
    description: "This property is close to the windmill!",
  },
  {
    label: "Mindfulness",
    icon: TbYoga,
    description: "This property is close to the modern!",
  },
  {
    label: "Writing",
    icon: GiPencil,
    description: "This property is close to the beach!",
  },
  {
    label: "Computer programming",
    icon: TbCode,
    description: "This property is close to the windmill!",
  },
  {
    label: "Makeup or hairstyling",
    icon: GiHairStrands,
    description: "This property is close to the modern!",
  },
  {
    label: "Public speaking",
    icon: GiPublicSpeaker,
    description: "This property is close to the modern!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
