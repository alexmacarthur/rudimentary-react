import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]); 
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(0);

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      total = item.price + total;
      return total;
    }, 0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setItems([...items, {
      name: newItemName,
      price: newItemPrice 
    }])
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" onChange={(e) => setNewItemName(e.target.value)} /> 
        </label>
        
        <label>
          Price
          <input type="text" onChange={(e) => setNewItemPrice(e.target.value)} />
        </label>

        <button>Add Item</button>
      </form>
      
      <ul>
        {items.map(({ name, price }) => {
          return (
            <li>
              <span>
                {name}
              </span>

              <span>
                {price}
              </span>
            </li>
          )
        })}
      </ul>

      Total: {calculateTotal()}
    </div>
  )
}

export default App;
