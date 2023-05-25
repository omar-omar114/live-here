import React from "react";
import './AdCard.css'

function AdCard({ ad }) {
  return (
    <div className="ad-flex">
      <div className="image-card">
        <img src={ad.image} alt="card" width={330} height={200}/>
      </div>
      <div className="detail-card-flex my-3">
        <p>{ad.adress}</p>
        <div className="price-surface-flex">
          <p>{ad.price} $</p>
          <span>-</span>
          <p>{ad.surface} m²</p>
        </div>

        <p>{ad.type}</p>
      </div>
    </div>
  );
}

export default AdCard;
