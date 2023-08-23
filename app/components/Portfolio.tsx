// components/Portfolio.tsx

import React from "react";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

type PortfolioProps = {
  items: PortfolioItem[];
};

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
