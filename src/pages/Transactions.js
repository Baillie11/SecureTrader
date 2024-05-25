import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        console.log('Fetched transactions:', data); // Add this line
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.amount} - {transaction.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
