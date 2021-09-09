import React from "react";

function ItemTotal({items}) {
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      total = item.price + total;
      return total;
    }, 0);
  };

  return <span>Total: {calculateTotal()}</span>;
}

export default ItemTotal;
