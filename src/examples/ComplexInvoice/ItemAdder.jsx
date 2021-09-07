import React, { useRef } from "react";

function ItemAdder({ onAddItem }) {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = [...e.target.elements];

    onAddItem({
      name: formElements.find((e) => e.name == "name").value,
      price: formElements.find((e) => e.name == "price").value,
    });

    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        Name
        <input type="text" name="name" />
      </label>

      <label>
        Price
        <input type="text" name="price" />
      </label>

      <button>Add Item</button>
    </form>
  );
}

export default ItemAdder;
