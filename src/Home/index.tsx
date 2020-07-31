import React, { useState, useMemo } from "react";

// import { Container } from './styles';

function Home() {
  const [binary, setBinary] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const decimal = useMemo(HandleSubmit, [binary]);
  const binaryNumber = useMemo(HandleSubmitDecimal, [decimalNumber]);

  function HandleSubmit() {
    const newArray = binary.split("");
    const binaryArray = newArray.map((number) => {
      return parseInt(number);
    });
    binaryArray.reverse();

    return binaryArray.reduce((acc, item, index) => {
      return acc + item * 2 ** index;
    }, 0);
  }

  function HandleSubmitDecimal() {
    if (!decimalNumber) return "";
    let newNumber = parseInt(decimalNumber);
    const binaryArray = [];

    while (newNumber >= 2) {
      binaryArray.push(newNumber % 2);
      newNumber = parseInt((newNumber / 2).toString());
    }
    binaryArray.push(newNumber % 2);
    binaryArray.reverse();
    binaryArray.reduce((acc, item) => {
      return acc + item.toString();
    }, "");
    return binaryArray;
  }

  return (
    <div>
      <input
        type="text"
        value={binary}
        onChange={(e) => {
          setBinary(e.target.value);
        }}
      />
      {decimal ? <h1>{decimal}</h1> : <h1>texe</h1>}
      <input
        type="text"
        value={decimalNumber}
        onChange={(e) => {
          setDecimalNumber(e.target.value);
        }}
      />
      {binaryNumber ? <h1>{binaryNumber}</h1> : <h1>texe</h1>}
    </div>
  );
}

export default Home;
