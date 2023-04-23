import { useState } from 'react'
import './App.css'
import asset1 from "./../public/shoe1.png"
import asset2 from "./../public/shoe2.png"
import asset3 from "./../public/hat3.png"
import asset4 from "./../public/shoe4.png"

const pic1 = asset1
const pic2 = asset2
const pic3 = asset3
const pic4 = asset4

const data = {
  subTotal: 280,
  shirts: [
    {
      quantity: 1,
      id: 0,
      title: "Nike ACG Moc 3.5",
      description: "5/5.5/6",
      price: 115,
      img: pic1
    },
    {
      quantity: 2,
      id: 1,
      title: 'Jordan Nu Retro 1 "Fresh Ink"',
      description: "4.5/5/6",
      price: 150,
      img: pic2
    },
    {
      quantity: 3,
      id: 2,
      title: "Jordan",
      description: "Unique Size",
      price: 35,
      img: pic3
    },
    {
      quantity: 4,
      id: 3,
      title: "KD Trey 5 X",
      description: "3/3.5/4.5/5",
      price: 115,
      img: pic4
    }
  ]
};

export default function App() {

  const [shirts, setShirts] = useState(data.shirts);

  function removeShirt(index) {
    setShirts(prevShirts => prevShirts.filter((shirt, i) => i !== index));
  }

  function updateQuantity(index, quantity) {
    setShirts(prevShirts => prevShirts.map((shirt, i) => {
      if (i === index) {
        return { ...shirt, quantity };
      }
      return shirt;
    }));
  }

  const subTotal = shirts.reduce((total, shirt) => total + shirt.quantity * shirt.price, 0);

  return (
    <div className="shopping-cart">
      <div className='product-body'>
        {shirts.map((shirt, index) => (
          <div key={shirt.id} >
            <div className="row">
              <img src={shirt.img} alt={shirt.title} />
              <p className="title">
                <span>{shirt.title}</span>
                <span>{shirt.description}</span>
                <button className="btnQuitar" onClick={() => removeShirt(index)}>Remove</button>
              </p>
              <p className="precioUnitario">${shirt.price}.00</p>
              <p className="cantidad">
                <input
                  type="number"
                  className="inputValue"
                  value={shirt.quantity}
                  onChange={event => updateQuantity(index, event.target.value)}
                  min={0}
                />
              </p>
              <p className="precioTotal">${shirt.price * shirt.quantity}.00</p>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
      <button className="subtotal">
        <h2>Total</h2>
        <h3 id="total">${subTotal}.00 USD</h3>
      </button>
    </div>
  );
}


