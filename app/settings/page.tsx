"use client";

import { useState } from "react";

const Settings: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
  };

  const handleChangePassword = () => {
    // Handle password change logic here
  };

  return (
    <div className="settings-container">
      <h1>Settings & Preferences</h1>

      <section>
        <h2>Account Settings</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleChangePassword}>Change Password</button>
        <button onClick={handleDeleteAccount}>Delete Account</button>
      </section>

      <section>
        <h2>Privacy Options</h2>
        <label>
          <input
            type="checkbox"
            checked={privacy}
            onChange={() => setPrivacy((prev) => !prev)}
          />
          Enable Privacy
        </label>
      </section>

      <section>
        <h2>Notification Preferences</h2>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications((prev) => !prev)}
          />
          Receive Notifications
        </label>
      </section>

      <section>
        <h2>Theme</h2>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          Dark Mode
        </label>
      </section>
    </div>
  );
};

export default Settings;
