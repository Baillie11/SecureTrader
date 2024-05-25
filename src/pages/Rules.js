import React, { useState } from 'react';
import RuleForm from '../components/RuleForm';

const Rules = () => {
  const [rules, setRules] = useState([]);

  const handleAddRule = (newRule) => {
    setRules([...rules, newRule]);
  };

  return (
    <div>
      <h2>Rules</h2>
      <RuleForm onAddRule={handleAddRule} />
      <ul>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
