import React from "react";
import { Link } from "react-router-dom";

function SectionFourItem(props) {
  return (
    <>
      <div className="secFour__item">
        <Link className="secFour__item__link" to={props.path}>
          <div style={props.style} className="secFour__item__info">
            <img
              className="secFour__item__img"
              width="32"
              height="52"
              src={props.src}
              alt=""
            ></img>
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
            <p className="secFour__item__text">{props.text}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SectionFourItem;
