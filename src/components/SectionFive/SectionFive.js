import React from "react";
import "./SectionFive.css";
import { Link } from "react-router-dom";
import SectionFiveItem from "./SectionFiveItem";

function SectionFive() {
  return (
    <div className="sectionFive" id="sectionFive">
      <div className="sectionFive-container">
        <div className="sectionFive-info">
          <h2 className="sectionFive-title">Our Team</h2>
          <p className="sectionFive-text">
            Our team is dedicated to developing innovative waste management, recycling, industrial service to better manage our customers’ environmental needs and provide them a variety of sustainable solutions.
            Everyone working within the CCALB group are fully involved in our know-how and in our success as a key player.
          </p>
          {/* <Link to="/sign-up">
            <button className="sectionFive-button">VIEW ALL MEMBERS</button>
          </Link> */}
        </div>
        <SectionFiveItem
          path={"/"}
          text="Eva Shaipi"
          photo={"/team/Eva Shaipi.png"}
          jobPosition="Engineer and technical director"
        />
        <SectionFiveItem
          path={"/"}
          text="Ilir Londo"
          photo={"/team/anonimus photo.png"}
          jobPosition="Administrator"
        />
        <SectionFiveItem
          path={"/"}
          text="Argjenta Lleshanaku"
          photo={"/team/anonimus photo.png"}
          jobPosition="Chief financial officer"
        />
        <SectionFiveItem
          path={"/"}
          text="Gentjan Londo"
          photo={"/team/anonimus photo.png"}
          jobPosition="Shift Manager"
        />
        <SectionFiveItem
          path={"/"}
          text="Dylber Xhemanllari"
          photo={"/team/anonimus photo.png"}
          jobPosition="Shift Manager"
        />
        <SectionFiveItem
          path={"/"}
          text=""
          photo={"/team/anonimus photo.png"}
          jobPosition=""
        />
      </div>
    </div>
  );
}

export default SectionFive;
