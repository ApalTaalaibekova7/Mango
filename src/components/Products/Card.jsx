import React from 'react';
import './Card.css';

export default function Card({ isOnSale, isBestSeller, price, salePrice, description,ImgCard }) {
  return (
    <div className="card" style={{ position: 'relative' }}>
      {/* Метки */}
      {isOnSale && <span className="badge badge-sale">Скидка</span>}
      {isBestSeller && <span className="badge badge-bestseller">Хит продаж</span>}

      {/* Изображение продукта */}
      <img src={ImgCard} className="card-img-top" alt="Product" />

      {/* Тело карточки */}
      <div className="card-body">
        <h5 className="card-price">{price} сом</h5>
        {isOnSale && <h5 className="card-price-sale">{salePrice} сом</h5>}
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-success">
          В корзину
        </a>
      </div>
    </div>
  );
}
