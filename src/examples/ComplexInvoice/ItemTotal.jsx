import React, { useContext } from "react";
import { ItemContext } from "./index";

function ItemTotal() {
  const items = useContext(ItemContext);

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      total = item.price + total;
      return total;
    }, 0);
  };

  return <span>Total: {calculateTotal()}</span>;
}

export default ItemTotal;
