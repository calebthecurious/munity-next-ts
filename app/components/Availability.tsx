import React from "react";

type AvailabilitySlot = {
  day: string;
  time: string;
};

type AvailabilityProps = {
  slots: AvailabilitySlot[];
};

const Availability: React.FC<AvailabilityProps> = ({ slots }) => {
  return (
    <div className="availability">
      <h3>Availability</h3>
      <ul>
        {slots.map((slot, index) => (
          <li key={index}>
            {slot.day}: {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Availability;
