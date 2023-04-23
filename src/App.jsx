import { useState } from 'react'
import './App.css'
import "/shoe 1.png"
import "/shoe 2.png"
import "/hat 3.png"
import "/shoe 4.png"

const data = {
  subTotal: 280,
  shirts: [
    {
      quantity: 1,
      id: 0,
      title: "Nike ACG Moc 3.5",
      description: "5/5.5/6",
      price: 115,
      img: "/shoe 1.png"
    },
    {
      quantity: 2,
      id: 1,
      title: 'Jordan Nu Retro 1 "Fresh Ink"',
      description: "4.5/5/6",
      price: 150,
      img: "/shoe 2.png"
    },
    {
      quantity: 3,
      id: 2,
      title: "Jordan",
      description: "Unique Size",
      price: 35,
      img: "/hat 3.png"
    },
    {
      quantity: 4,
      id: 3,
      title: "KD Trey 5 X",
      description: "3/3.5/4.5/5",
      price: 115,
      img: "/shoe 4.png"
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


