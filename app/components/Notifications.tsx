import React from "react";

type Notification = {
  id: number;
  message: string;
};

type NotificationsProps = {
  notifications: Notification[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
