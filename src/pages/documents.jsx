import { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";

const Documents = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  const inputRef = useRef();
  useEffect(
    () => {
      if (count % 2 === 0) {
        setIsEven(true);
      } else {
        setIsEven(false);
      }
    },
    [count] // count ko value change huda call hunxa [] yo rakho vane ekchoti matrai call hunxa kei ni rakhena vane infinitely call hunxa
  );

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style = "background-color:grey; border:1px solid red";
  }; 
  const handleUnFocus = () => {
    inputRef.current.blur();
  };

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  return (
    <>
      <Navbar title={"documents"}></Navbar>
      <h1>Documents</h1>
      <p>
        Count value:
        <span style={{ fontSize: "50px", color: "red" }}>{count}</span>
      </p>
      <buttin
        onClick={handleIncrement}
        style={{ color: "black", backgroundColor: "blue", cursor: "pointer" }}
      >
        Increment
      </buttin>
      <p>
        Count value:
        <span style={{ fontSize: "50px", color: "red" }}>
          {isEven ? "Even" : "Odd"}
        </span>{" "}
        {/* //boolean value isEven directly display hudaina
         */}
      </p>
      <input type="text" ref={inputRef} /> <br /> <br />
      <button onClick={handleFocus}> Focus </button>
      <button onClick={handleUnFocus}> Unfocus </button>
    </>
  );
};
export default Documents;
