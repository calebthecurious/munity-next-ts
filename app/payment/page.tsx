"use client";

import { useState } from "react";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
}

const dummyTransactions: Transaction[] = [
  { id: "1", date: "2023-08-20", amount: 100, description: "Guitar Lesson" },
  { id: "2", date: "2023-08-15", amount: 50, description: "Cooking Class" },
];

const Payments: React.FC = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [cardNumber, setCardNumber] = useState("");

  const handleAddCard = () => {
    // Integrate Stripe or other payment processors here to add a new card
  };

  const handleRemoveCard = () => {
    // Integrate Stripe or other payment processors here to remove a card
  };

  return (
    <div className="payments-container">
      <h1>Payments</h1>

      <section>
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Payment Methods</h2>
        {/* Dummy card data for illustration */}
        <div className="card">
          **** **** **** 1234 Exp: 12/25
          <button onClick={handleRemoveCard}>Remove</button>
        </div>
        <label>
          Add New Card:
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <button onClick={handleAddCard}>Add Card</button>
      </section>
    </div>
  );
};

export default Payments;
