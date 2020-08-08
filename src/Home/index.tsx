import React, { useState, useMemo, useEffect } from "react";
import { FiRepeat } from "react-icons/fi";
import { toast } from 'react-toastify';
import { Container } from "./styles";
import validatedBinaryString from "../utils/validatedBinaryString";

function Home() {
  const [binary, setBinary] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const decimal = useMemo(HandleSubmit, [binary]);
  useEffect(()=>{
    const valid = validatedBinaryString(binary);
    if(!valid) {
      toast.error('Not valided')
    }
  }, [binary]);
  const binaryNumber = useMemo(HandleSubmitDecimal, [decimalNumber]);

  function HandleSubmit() {
    const valid = validatedBinaryString(binary);

    if(!valid) {
      return 'Error';
    }
    
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
    <Container>
      <h1>
        Binary <FiRepeat></FiRepeat> Decimal
      </h1>
      <input
        autoFocus
        type="text"
        value={binary}
        onChange={(e) => {
          setBinary(e.target.value);
        }}
      />
      {decimal ? <h2>{decimal}</h2> : <h2>texe</h2>}
      <input
        type="text"
        value={decimalNumber}
        onChange={(e) => {
          setDecimalNumber(e.target.value);
        }}
      />
      {binaryNumber ? <h2>{binaryNumber}</h2> : <h2>texe</h2>}
    </Container>
  );
}

export default Home;
