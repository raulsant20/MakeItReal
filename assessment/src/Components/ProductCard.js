import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountDownTime from './countDownTime';
import './ProductCard.css';

const RandomNum = () => Math.floor(Math.random() * 10);

export default function ProductCard([id, title, image]) {
  const navigate = useNavigate();
  const { time, disabled } = CountDownTime(RandomNum());

  return (
    <section className="ProductCard" key={id}>
      <p className="ProductCard__title">{title}</p>
      <div className="ProductCard__image">
        <img src={image} alt="" />
      </div>
      <div className="ProductCard__bottom">
        <span className="ProductCard__bottom-span">{`${time} s`}</span>
        <button
          className="ProductCard__bottom-button"
          type="button"
          disabled={disabled}
          onClick={() => navigate(`/products/${id}`)}
        >
          More details
        </button>
      </div>
    </section>
  );
}
