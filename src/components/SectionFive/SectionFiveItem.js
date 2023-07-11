import React, { useState } from "react";
import { Link } from "react-router-dom";

function SectionFiveItem(props) {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className="secFive__item"
        style={{ backgroundImage: `url("${props.photo}")`,backgroundPosition:"center" }}
      >
        <div className="secFive__backDrop">
          <h1 style={{color:"white",fontSize:"25px"}}>{props.text}</h1>
          <p style={{color:"black"}}>{props.jobPosition}</p>
        </div>
        <Link className="secFive__item__link" to={props.path}>
          <div style={props.style} className="secFive__item__info">
            <h3
              style={{
                alignItems: "center",
                color: "#131C3B",
                fontFamily: '"Oswald", Sans-serif',
                fontWeight: "500",
              }}
            >
              {props.heading}
            </h3>
            {/* <p className="secFive__item__text">{props.text}</p> */}
          </div>
        </Link>
      </div>
    </>
  );
}

export default SectionFiveItem;
