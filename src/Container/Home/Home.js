import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  const d = new Date();
  console.log(d);
  const [date, setDate] = useState(d.toString());
  const dateandtime = () => {
    console.log("hi");
    setDate(new Date().toString());
  };

  const [color, setColor] = useState("cyan");

//   const bgcolor = () => {
//     console.log(color);
//     setColor("red");
//   };
//   const bg1color = () => {
//     console.log(color);
//     setColor("cyan");
//   };
  const bg2color = () => {
    console.log(color);
    if (color == "red") {
      setColor("cyan");
    } else {
      setColor("red");
    }
  };

  return (
    <div  className="colorbtn" style={{ backgroundColor: color }}>
      <Button className="butt1" onClick={dateandtime}>Date & Time</Button>
      <h1>{date}</h1>
      
        {/* <Button onClick={bgcolor}> Change Background</Button>
        <Button onClick={bg1color}> Change Background</Button> */}
        <Button className="butt2" onClick={bg2color}> Change Background</Button>
      </div>
    
  );
}
