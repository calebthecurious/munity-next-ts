"use client";

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType;
  description: string;
  seekerCount: number;
  lessonCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon: Icon,
  description,
  seekerCount,
  lessonCount,
  category,
  locationValue,
}) => {
  return <div>Listing Category</div>;
};

export default ListingCategory;
