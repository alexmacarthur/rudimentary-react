import React from "react";
import ItemTotal from "./ItemTotal";

function ItemList({ items }) {
  return (
    <>
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

      <ItemTotal items={items}/>
    </>
  );
}

export default ItemList;
