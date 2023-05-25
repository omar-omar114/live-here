import React, { useState } from "react";
import AdCard from "../ad cards/AdCard";
import './AdsList.css'

function AdsList() {
  const [ads, setAds] = useState([
    {
      adress: "Casablanca",
      price: 1030,
      surface: 120,
      type: "Appartement",
      image: "images/image1.jpg",
    },
    {
      adress: "Marrakech",
      price: 2500,
      surface: 400,
      type: "Villa",
      image: "images/image2.jpg",
    },
    {
      adress: "Rabat",
      price: 1750,
      surface: 80,
      type: "Appartement",
      image: "images/image3.jpg",
    },
    {
      adress: "Fes",
      price: 980,
      surface: 50,
      type: "Studio",
      image: "images/image4.jpg",
    },
    {
      adress: "El jadida",
      price: 1000,
      surface: 150,
      type: "Appartement",
      image: "images/image5.jpg",
    },
    {
      adress: "Tanger",
      price: 1100,
      surface: 126,
      type: "Appartement",
      image: "images/image6.jpg",
    },
    {
      adress: "Dakhla",
      price: 1210,
      surface: 110,
      type: "Appartement",
      image: "images/image7.jpg",
    },
    {
      adress: "Agadir",
      price: 1670,
      surface: 100,
      type: "Appartement",
      image: "images/image8.jpg",
    },
  ]);

  return (
    <div>
      <div className="adslist-container">
        <div className="adslist-title">
          <h1>Sélection de biens à louer</h1>
        </div>
        <div className="adslist-dot"></div>
        <div className="grid-conatainer">
          {ads.map(ad => (
            <AdCard ad={ad} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdsList;
