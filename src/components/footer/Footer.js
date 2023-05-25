import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer bg-dark">
      <div className="info-footer">
        <h3>Informations</h3>
        <div className="discover-us-footer">
          <p>Découvrez la solution Greenloc</p>
          <p>Mentions légales</p>
        </div>
      </div>
      <div className="suivez-nous-footer">
        <h3>Suivez nous</h3>
        <div className="social-media">
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i
            class="fa-brands fa-square-youtube"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
