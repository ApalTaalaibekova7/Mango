import React from 'react';
import Card from './Card';
import './Products.css';
import image1 from '../../assets/products/image-3.png';
import image2 from '../../assets/products/img.png';
import image3 from '../../assets/products/image-11.png';
import image4 from '../../assets/products/image-7.png';
import image5 from '../../assets/products/image-10.png';
import image6 from '../../assets/products/img-9.png';


export default function Products() {
  const products = [
    {
      id: 1,
      isOnSale: true,
      isBestSeller: true,
      price: '140',
      salePrice: '150',
      description: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
      ImgCard: image1,
    },
    {
      id: 2,
      isOnSale: false,
      isBestSeller: true,
      price: '200',
      salePrice: '',
      description: 'Сыр Гауда выдержанный, 500 г.',
      ImgCard: image2,
    },
    {
      id: 3,
      isOnSale: true,
      isBestSeller: false,
      price: '250',
      salePrice: '290',
      description: 'Напиток газированный лимонный, 1 л.',
      ImgCard: image3,
    },
    {
        id: 4,
        isOnSale: false,
        isBestSeller: true,
        price: '70',
        salePrice: '',
        description: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
        ImgCard: image6,
    },
    {
        id: 5,
        isOnSale: true,
        isBestSeller: false,
        price: '200',
        salePrice: '230',
        description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        ImgCard: image4,
    },
    {
        id: 6,
        isOnSale: false,
        isBestSeller: true,
        price: '170',
        salePrice: '',
        description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        ImgCard: image5,
        
    },
  ];

  return (
<div>
  <p className="section-title">Акции</p>
  <div className="products-container">
    {products.map((product) => (
      <Card
        key={product.id}
        isOnSale={product.isOnSale}
        isBestSeller={product.isBestSeller}
        price={product.price}
        salePrice={product.salePrice}
        description={product.description}
        ImgCard={product.ImgCard}
      />
    ))}
  </div>
</div>

 
  );
}
