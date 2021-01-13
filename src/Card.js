import React, { useState } from "react";
import "./Card.css";
import Display from "./Display";

function Card({ data }) {
  const [check, setCheck] = useState(false);
  const handleClick = (d) => {
    setCheck((prevCheck) => !prevCheck);
    // console.log("whats check:", check);
  };
  return (
    <div className={`card ${check && "card_wide"}`}>
      <img src={data.thumb} alt="" onClick={() => handleClick(data)} />
      <div>{check && <Display data={data} />}</div>

      <div className="card_info">
        <h2>{data.title}</h2>
        <h4>{data.metadescription}</h4>
      </div>
    </div>
  );
}

export default Card;
