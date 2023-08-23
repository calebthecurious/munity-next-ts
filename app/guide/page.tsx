"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GuideHeader from "../components/GuideHeader";
import Skills from "../components/Skills";
import Availability from "../components/Availability";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import RatingsAndReviews from "../components/RatingsAndReviews";
import BookingButton from "../components/BookingButton";

// Sample data for demonstration purposes. In a real-world scenario, fetch this data from an API or database.
const guideData = {
  name: "John Doe",
  avatarUrl: "/path/to/avatar.jpg",
  bio: "Experienced guitarist with over 10 years of teaching experience.",
  skills: [
    {
      id: 1,
      name: "Guitar",
      description: "Beginner to advanced guitar lessons.",
    },
    // More skills...
  ],
  availability: [
    { day: "Monday", time: "10am - 2pm" },
    // More availability slots...
  ],
  portfolio: [
    {
      id: 1,
      title: "Guitar Session",
      description: "Teaching a group of students.",
      imageUrl: "/path/to/image.jpg",
    },
    // More portfolio items...
  ],
  testimonials: [
    { id: 1, author: "Alice", content: "John is an amazing teacher!" },
    // More testimonials...
  ],
  reviews: [
    { id: 1, author: "Bob", rating: 5, content: "Loved the session!" },
    // More reviews...
  ],
};

const GuideProfile: React.FC = () => {
  // const router = useRouter();
  // const { id } = router.query;

  // In a real-world scenario, use the `id` to fetch the guide's data from an API or database.

  console.log(guideData);
  return (
    <div className="guide-profile">
      <GuideHeader {...guideData} />
      <Skills skills={guideData.skills} />
      <Availability slots={guideData.availability} />
      <Portfolio items={guideData.portfolio} />
      <Testimonials testimonials={guideData.testimonials} />
      <RatingsAndReviews reviews={guideData.reviews} />
      <BookingButton />
    </div>
  );
};

export default GuideProfile;
