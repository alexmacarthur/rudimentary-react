import React, { useState, createContext } from "react";
import ItemAdder from "./ItemAdder";
import ItemList from "./ItemList";

export const ItemContext = createContext([]);

function Invoice() {
  const [items, setItems] = useState([]);

  return (
    <ItemContext.Provider value={items}>
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
    </ItemContext.Provider>
  );
}

export default Invoice;
