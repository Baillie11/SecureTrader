import React, { useState } from 'react';

const SettingsForm = ({ settings, onUpdateSettings }) => {
  const [newSettings, setNewSettings] = useState(settings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSettings({ ...newSettings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateSettings(newSettings);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enable Online Payments:
        <input
          type="checkbox"
          name="enablePayments"
          checked={newSettings.enablePayments}
          onChange={(e) => handleChange({ target: { name: 'enablePayments', value: e.target.checked } })}
        />
      </label>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default SettingsForm;
