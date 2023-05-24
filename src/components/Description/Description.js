import React from "react";
import "./Description.css";

function Description() {
  return (
    <div className="description">
      <div className="description-container">
        <div className="desc-title">
          <h1>Comment cela se passe ?</h1>
        </div>
        <div className="line"></div>
        <div className="desc-video">
          <iframe
           className="iframe"
            width={727}
            height={409}
            src="https://www.youtube.com/embed/a81TVCmFjkA"
            title="À la decouverte de greenloc"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
