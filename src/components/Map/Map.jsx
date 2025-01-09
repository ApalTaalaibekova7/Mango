import React, { useEffect } from "react";
import "./Map.css";
import phoneIcon from "../../assets/icons/phone.png"; 
import whatsappIcon from "../../assets/icons/whatsapp.png";
import telegramIcon from "../../assets/icons/telegram.png";
import locationIcon from "../../assets/icons/heart-lined-72.png";

export default function Map() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =

      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad8055568f6a3e3c3990c905575443c6e14eff00d022752f4d105736185f6f117&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false";
    script.async = true;
    document.getElementById("map")?.appendChild(script);
  }, []);

  return (
    <div className="map-container">
      <h2>Как нас найти?</h2>
      <div className="contact-details">
        <h2>Контакты</h2>
        <ul>
          <li>
            <a href="tel:+996997091797">
              <img src={phoneIcon} alt="Phone Icon" />
              <span>+996 997 09 17 97</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+996501798709" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp Icon" />
              <span>+996 501 798 709</span>
            </a>
          </li>
          <li>
            <a href="https://t.me/Apalzuzu" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram Icon" />
              <span>Telegram</span>
            </a>
          </li>
          <li>
            <img src={locationIcon} alt="Location Icon" />
            <span>ул. Исхака Раззакова 51а</span>
          </li>
        </ul>
      </div>
      <div className="map-wrapper">
        <div className="map" id="map"></div>
      </div>
    </div>
  );
}
