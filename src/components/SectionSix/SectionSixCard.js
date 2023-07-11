import React from "react";
import "./SectionSixCard.css";

function SectionSixCard(props) {
  const { title, subtitle, content, photo } = props;

  return (
    <div style={{padding:"75px 0px"}}>
      <div className="sectionSix-card">
        <img className="image-card-hover" src={photo} alt="" />
        <h2 className="sectionSix-card-header">{title}</h2>
        <h3 className="sectionSix-card-title">{subtitle}</h3>
        <span style={{
          fontWeight:"normal",
          fontFamily:"sans-serif",
          fontSize:"15px",
          fontStyle:"italic"
        }} className="sectionSix-card-text">{content}</span>
      </div>
    </div>
  );
}

export default SectionSixCard;
