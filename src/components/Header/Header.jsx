import React from 'react'
import './Header.css'
import Imglogo from '../../assets/images/logoo.png'
import Icon from '../../assets/icons/menu.png'
import IconSearch from '../../assets/icons/search.png' 
import IconFavorites from '../../assets/icons/heart-lined-72.png' 
import IconOrder from '../../assets/icons/product-2-64.png' 
import IconShopp from '../../assets/icons/shopping-cart-26-64.png'
import IconUser from '../../assets/icons/user-6-64.png'

export default function Header() {
  return (
    <header className="header">
    <div className="logo-img">
      <img src={Imglogo} alt="logo" />
    </div>
    <button className="header-button">
      <img src={Icon} alt="catalog" /> Каталог
    </button>
    <div className="search-container">
      <input type="search" placeholder="Найти товар" />
      <img src={IconSearch} alt="Поиск" className="icon-search" />
    </div>
    <div className="icons">
      <div className="icon">
        <img src={IconFavorites} alt="Favorites" /> Избранное
      </div>
      <div className="icon">
        <img src={IconOrder} alt="order" /> Заказы
      </div>
      <div className="icon">
        <img src={IconShopp} alt="shopp" /> Корзина
      </div>
      <div className="icon">
        <img src={IconUser} alt="user" /> Вход
      </div>
    </div>
  </header> 

  )
}
