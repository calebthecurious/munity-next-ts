import React from "react";
import Link from "next/link";

const QuickLinks: React.FC = () => {
  return (
    <div className="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <Link href="/edit-profile">Edit Profile</Link>
        </li>
        <li>
          <Link href="/messages">View Messages</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default QuickLinks;
