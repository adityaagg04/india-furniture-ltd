import React from "react";
import { AiFillStar } from "react-icons/ai";

const ItemCard = (props) => {
  const { name, price, company, rating, url, amount, id } = props.item;
  const { increase, decrease } = props;
  return (
    <main className="single-card">
      <img src={url} className="card-img" alt={name} />
      <h1 className="card-company">{company}</h1>
      <h1 className="card-name">{name}</h1>
      <div className="card-rating">
        <AiFillStar className="card-rating-star" />
        <h1 className="card-rating-num">{rating}</h1>
      </div>
      <h1 className="card-price">${price}</h1>
      <div className="add-cart-item-container">
        <h1 className="decrease" onClick={() => decrease(id)}>
          -
        </h1>
        <h1 className="item-count">{amount}</h1>
        <h1 className="increase" onClick={() => increase(id)}>
          +
        </h1>
      </div>
    </main>
  );
};

export default ItemCard;
