import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

const Downloads = () => {
  const [countTimer, setCountTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => setCountTimer(() => countTimer + 1), 1000);
  });

  const titleRef = useRef()
  const changTitleRef = ()=>{
    titleRef.current.style = "color: blue; font-size: 40px;"
    titleRef.current.style.fontStyle = 'italic'
  }

  return (
    <>
      <Navbar title={"Downloads Page"}></Navbar>
      <h1 onClick={changTitleRef} ref={titleRef}>Downloads Page</h1>
      <p>
        Timer:
        <span style={{ fontSize: "50px", color: "red" }}>{countTimer}</span>
      </p>
    </>
  );
};

export default Downloads;
