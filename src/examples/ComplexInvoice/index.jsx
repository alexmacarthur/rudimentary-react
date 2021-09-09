import React, { useState  } from "react";
import ItemAdder from "./ItemAdder";
import ItemList from "./ItemList";

function Invoice() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <ItemAdder
        onAddItem={({ name, price }) => {
          setItems([
            ...items,
            {
              name,
              price,
            },
          ]);
        }}
      />

      <ItemList items={items} />
    </div>
  );
}

export default Invoice;
