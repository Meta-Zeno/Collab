
import React from "react";
import BasketItem from "./BasketItem";


const Basket = (props) => {
console.log(`props.catPricesTotal, ${props.catPricesTotal}`)
console.log(`props.basketData, ${props.basketData}`)

  return (
    <div className="basket-container">
      <button
        className="close-basket"
        onClick={() => {
          props.closeBasket();
        }}
      >

      </button>
      <h2 className="your-basket"> Your Basket</h2>
      {props.basketData.length > 0 ? (
        props.basketData.map((basketItem, index) => {
          return (
            <BasketItem
              basketItem={basketItem}
              key={index}
              handleTakeFromBasket={props.handleTakeFromBasket} 
              price={basketItem.price} 
            />
          );
        })
      ) : (
        <p className="basket-is-empty">Your basket is empty</p>
      )}
      <h2 className="total-price">Your Total is: £{props.catPricesTotal}</h2>
      
      
    </div>
  );
};

export default Basket;
