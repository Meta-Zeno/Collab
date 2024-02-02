import React, { useState } from "react";
import "../style.css";

function Checkout(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [nameonCard, setnameonCard] = useState("");
  const [CVC, setCVC] = useState("");

  return (
    <div className="cPage">
      <div className="checkout page">
        <h1>Checkout</h1>
        <div className="name">
          <input type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div className="last">
          <input type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div className="address">
          <input type="text" placeholder="Enter first line of address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="address2">
          <input type="text" placeholder="Enter second line of address" value={address2} onChange={(e) => setAddress2(e.target.value)} />
        </div>
        <div className="paymentmethod">
          <h1>Payment Method</h1>
          <div className="payment">
            <input type="text" placeholder="Enter card number" value={cardNumber} onChange={(e) => setcardNumber(e.target.value)} />
          </div>
          <div class="cardName">
            <input type="text" placeholder="Name on Card" value={nameonCard} onChange={(e) => setnameonCard(e.target.value)} />
          </div>
          <div className="cvcNumber">
            <input type="text" placeholder="CVC Card" value={CVC} onChange={(e) => setCVC(e.target.value)} />
          </div>
        </div>
        <button className="checkoutbutton sale-btn" onClick={() => alert("Checkout completed!")}>
          Checkout
        </button>
      </div>

      <div className="total">
        <h1>Total Price :</h1>
        <div className="total-container">
          <h1>£{props.catPricesTotal}</h1>
        </div>
      </div>
    </div>
  );
}
export default Checkout;