import React, { useState, useRef, useMemo, useEffect } from "react";

function Invoice() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);
  const formRef = useRef(null);

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      total = item.price + total;
      return total;
    }, 0);
  };

  useEffect(() => {
    if (!items.length) return;

    console.log("log change of items");
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();

    setItems([
      ...items,
      {
        name: newItemName,
        price: newItemPrice,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          Name
          <input type="text" onChange={(e) => setNewItemName(e.target.value)} />
        </label>

        <label>
          Price
          <input
            type="text"
            onChange={(e) => setNewItemPrice(e.target.value)}
          />
        </label>

        <button>Add Item</button>
      </form>
      <ul>
        {items.map(({ name, price }) => {
          return (
            <li key={price}>
              <span>{name}</span>

              <span>{price}</span>
            </li>
          );
        })}
      </ul>
      Total: {calculateTotal()}
    </div>
  );
}

export default Invoice;
