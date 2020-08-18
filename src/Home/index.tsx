import React, { useState, useMemo, useEffect } from "react";
import { FiRepeat } from "react-icons/fi";
import { toast } from "react-toastify";
import { Container } from "./styles";
import validatedBinaryString from "../utils/validatedBinaryString";

function Home() {
  const [binary, setBinary] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const decimal = useMemo(HandleSubmit, [binary]);
  const binaryNumber = useMemo(HandleSubmitDecimal, [decimalNumber]);
  useEffect(() => {
    const valid = validatedBinaryString(binary);
    if (!valid) {
      toast.error("Please enter a valid binary number");
    }
  }, [binary]);

  function HandleSubmit() {
    if (binary === "") {
      setDecimalNumber("");
      return;
    }
    const valid = validatedBinaryString(binary);

    if (!valid) {
      return "Error";
    }

    const newArray = binary.split("");
    const binaryArray = newArray.map((number) => {
      return parseInt(number);
    });
    binaryArray.reverse();

    const decimalText = binaryArray.reduce((acc, item, index) => {
      return acc + item * 2 ** index;
    }, 0);

    setDecimalNumber(decimalText.toString());
  }

  function HandleSubmitDecimal() {
    if (decimalNumber === "") {
      setBinary("");
      return;
    }
    if (!decimalNumber) return "";
    let newNumber = parseInt(decimalNumber);
    const decimalArray = [];

    while (newNumber >= 2) {
      decimalArray.push(newNumber % 2);
      newNumber = parseInt((newNumber / 2).toString());
    }
    decimalArray.push(newNumber % 2);
    decimalArray.reverse();
    const binaryText = decimalArray.reduce((acc, item) => {
      return acc + item.toString();
    }, "");

    setBinary(binaryText);
  }

  return (
    <Container>
      <h1>
        Binary <FiRepeat></FiRepeat> Decimal
      </h1>
      <p>Binary</p>
      <input
        autoFocus
        type="text"
        value={binary}
        onChange={(e) => {
          setBinary(e.target.value);
        }}
      />
      <p>Decimal</p>
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
