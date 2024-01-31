import React from "react";
import Modal from "./modal";
import { useState } from "react";

export default function Card({ product }) {
  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };


  return (
    <>
      <div>
        <img className="image" src={product.image} alt="images of products" />
        <p>{product.rating.rate}</p>
        <button onClick={openModal}>More Info</button>
      </div>
      {toggleModal && <Modal product={product} close={closeModal} />}
    </>
  );
}
