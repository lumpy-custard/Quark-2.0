import React, { useState, useEffect } from 'react';
import { getItems } from './api';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center mb-5">Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border p-3 mb-2">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-blue-500 font-bold">${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
