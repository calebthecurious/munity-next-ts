import React from "react";

type Testimonial = {
  id: number;
  author: string;
  content: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <h3>What People Say</h3>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <blockquote>
              "{testimonial.content}"<footer>- {testimonial.author}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
