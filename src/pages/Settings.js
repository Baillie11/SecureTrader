import React, { useState } from 'react';
import SettingsForm from '../components/SettingsForm';

const Settings = () => {
  const [settings, setSettings] = useState({
    enablePayments: true,
  });

  const handleUpdateSettings = (updatedSettings) => {
    setSettings(updatedSettings);
  };

  return (
    <div>
      <h2>Settings</h2>
      <SettingsForm settings={settings} onUpdateSettings={handleUpdateSettings} />
    </div>
  );
};

export default Settings;
