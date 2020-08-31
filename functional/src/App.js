import React, { useState, createRef } from 'react';

const Item = ({ id, name, price, remove }) => {
  return (
    <li>
      {name}, ${price}
      <a href="#/" onClick={() => remove(id)}>&times;</a>
    </li>
  );
}

const App = (props) => {

  const [fruits, setFruits] = useState([
    { id: 1, name: "Banana", price: 9.99 },
    { id: 2, name: "Carrot", price: 9.49 },
    { id: 3, name: "Orange", price: 29.34 }
  ]);

  const nameRef = createRef();
  const priceRef = createRef();

  const add = () => {
    const id = fruits.length + 1;
    const name = nameRef.current.value;
    const price = priceRef.current.value;

    setFruits([
      ...fruits,
      { id, name, price }
    ]);
  }

  const remove = id => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  }

  return (
    <div>
      <h1>Functional Component</h1>
      <ul>
        {
          fruits.map(fruit => {
            return (
              <Item
                key={fruit.id}
                id={fruit.id}
                name={fruit.name}
                price={fruit.price}
                remove={remove} />
            );
          })
        }
      </ul>
      <input type="text" placeholder="Name" ref={nameRef} /> <br />
      <input type="text" placeholder="Price" ref={priceRef} /> <br />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
