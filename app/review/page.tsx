"use client";

import React, { useState } from "react";

const ReviewsRatingsPage: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState<string>("");

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Logic to submit the review and rating to the backend
    console.log("Submitted Rating:", rating);
    console.log("Submitted Review:", reviewText);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leave a Review & Rating</h1>

      {/* Star Rating System */}
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={`mr-2 ${
              rating && rating >= star ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Review Textarea */}
      <div className="mb-4">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your detailed review here..."
          rows={5}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>

      {/* Optional: Photo Upload */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Upload Photos:</label>
        <input type="file" multiple />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewsRatingsPage;
