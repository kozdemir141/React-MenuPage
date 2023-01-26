import React from "react";
import "./menu.css"

const menu = ({ image, title, description }) => {
  return (
    <div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <a href="#"><img id="image" src={image} alt="Placeholder image"/></a>
            
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4" id="title">{title}</p>
            </div>
          </div>
          <div class="content" id="description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default menu;
