import React from "react";

type Review = {
  id: number;
  author: string;
  rating: number;
  content: string;
};

type RatingsAndReviewsProps = {
  reviews: Review[];
};

const RatingsAndReviews: React.FC<RatingsAndReviewsProps> = ({ reviews }) => {
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="ratings-and-reviews">
      <h3>Ratings & Reviews</h3>
      <p>Average Rating: {averageRating.toFixed(1)} / 5</p>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.author}</strong> ({review.rating}/5):{" "}
            {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingsAndReviews;
