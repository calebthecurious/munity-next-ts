// app/tips/page.tsx
"use client";

import { useState } from "react";

const TipsPage: React.FC = () => {
  // State to manage the selected predefined tip amount
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  // State to manage the value of the custom tip input
  const [customTip, setCustomTip] = useState("");

  // Array of predefined tip amounts
  const predefinedTips = [5, 10, 15, 20];

  // Handler to update state when a predefined tip amount is selected
  const handleTipSelection = (amount: number) => {
    setSelectedTip(amount);
    setCustomTip(""); // Reset custom tip input if a predefined tip is selected
  };

  // Handler to update state when a custom tip amount is entered
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTip(null); // Reset predefined tip selection if custom tip is entered
    setCustomTip(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tipAmount = selectedTip || parseFloat(customTip);

    // TODO: Connect to your backend to process the tip
    // This can be done by sending an HTTP request to your backend endpoint responsible for handling tips
    // Here's a generic example:
    // const response = await fetch('/api/processTip', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ tipAmount })
    // });

    // TODO: If the backend processing was successful, you can then connect with Stripe (or another payment gateway)
    // to actually process the payment. This usually involves redirecting the user to a payment page or
    // using a library like Stripe.js to handle the payment on the frontend.

    // Reset the form or navigate the user to a thank you page
    setSelectedTip(null);
    setCustomTip("");
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Tip Your Guide</h1>

      <form onSubmit={handleSubmit}>
        {/* Predefined Tip Amounts */}
        <div className="mb-4">
          <label className="block mb-2">Select Tip Amount:</label>
          {predefinedTips.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`px-4 py-2 mr-2 rounded ${
                selectedTip === amount
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTipSelection(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom Tip Input */}
        <div className="mb-4">
          <label className="block mb-2">Or Enter Custom Amount:</label>
          <input
            type="number"
            step="0.01"
            value={customTip}
            onChange={handleCustomTipChange}
            className="border rounded p-2 w-1/4"
            placeholder="E.g. 25.50"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Tip
        </button>
      </form>
    </div>
  );
};

export default TipsPage;
