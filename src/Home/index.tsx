import React, { useState, useEffect } from "react";
import { FiRepeat } from "react-icons/fi";
import { toast } from 'react-toastify';
import { Container } from "./styles";
import validatedBinaryString from "../utils/validatedBinaryString";

function Home() {
  const [binary, setBinary] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  useEffect(()=>{
    console.log(binary)
    HandleSubmit();
    const valid = validatedBinaryString(binary);
    if(!valid) {
      toast.error('Not valided')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [binary]);

  useEffect(()=>{
    HandleSubmitDecimal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decimalNumber]);

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
    const decimalValue = binaryArray.reduce((acc, item, index) => {
      return acc + item * 2 ** index;
    }, 0);
    if(decimalValue.toString() !== decimalNumber){
      setDecimalNumber(decimalValue.toString())
    }
    return decimalValue
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
    const binaryValue = binaryArray.reduce((acc, item) => {
      return acc + item.toString();
    }, "");
    setBinary(binaryValue.toString())
    return binaryValue;
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
      <input
        type="text"
        value={decimalNumber}
        onChange={(e) => {
          setDecimalNumber(e.target.value);
        }}
      />
    </Container>
  );
}

export default Home;
