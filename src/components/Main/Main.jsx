import React from 'react'
import './Main.css'
import ImgMain from '../../assets/images/main-img.png'
import Products from '../../assets/images/img-products-main.png'

export default function Main() {
  return (
    <main className="main">
    <div className="background">
      <img src={ImgMain} alt="main" className="background-img" />
    </div>
    <div className="content">
      <img src={Products} alt="products" className="products-img" />
      <p className="headline">
        <span className="highlight"> Манго </span>
        <span className='kichi-market' >кичи маркети </span> 
      </p>
    </div>
  </main>
  )
}
