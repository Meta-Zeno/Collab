import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { faker, fakerEN_GB } from "@faker-js/faker";
import "./catCard.css";

const CatCard = ({ cat, plusToBasket }) => {
  const [toggle, setToggle] = useState(true);

  const createRandomCatDetails = () => {
    const randSex = faker.person.sexType();
    const randCatName = faker.person.firstName(randSex);
    const randCatBreed = faker.animal.cat();
    const randLoc = fakerEN_GB.location.county();
    const randEmail = fakerEN_GB.internet.email();
    const randPhone = fakerEN_GB.phone.number();
    const randPrice = faker.finance.amount({
      min: 100,
      max: 1000,
      dec: 2,
      symbol: "£",
    });

    return {
      name: randCatName,
      breed: randCatBreed,
      sex: randSex,
      bornIn: randLoc,
      email: randEmail,
      phone: randPhone,
      price: randPrice,
    };
  };

  const randomCatDetails = createRandomCatDetails();

  const handleClick = (cat) => {
    setToggle(!toggle);
    console.log(`cat: ${cat.breed}`)
    plusToBasket({ ...cat, ...randomCatDetails });
  };

  return (
    <div className="catCardCont" key={cat.id}>
      <div className="catCardContInner">
        <div className="catCardFront">
          <h2 className="catName">{randomCatDetails.name}</h2>
          <img className="catImg" src={cat.url} alt="random cat image" />
        </div>
        <div className="catCardBack">
          <p>Breed: {randomCatDetails.breed}</p>
          <p>Gender: {randomCatDetails.sex}</p>
          <p>Born In: {randomCatDetails.bornIn}</p>
          <p>OWNER CONTACT</p>
          <p>
            <IoIosCall /> {randomCatDetails.phone}
          </p>
          <p>
            <MdOutlineMailOutline /> {randomCatDetails.email}
          </p>
          <p>Price: {randomCatDetails.price}</p>
          <button onClick={()=> handleClick(cat)} className="btnInfo">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;



