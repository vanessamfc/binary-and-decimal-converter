import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
  color: #fff;
  height: 100vh;

  > h1 {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 45px;
    > svg {
      margin: 0 5px;
    }
  }
  > p {
    margin-bottom: 5px;
    font-size: 20px;
  }
  > input {
    background: none;
    height: 60px;
    width: 250px;
    border: 2px solid;
    border-radius: 4px;
    border-color: #00c853;
    font-size: 30px;
    font-family: "Share Tech Mono", monospace;
    padding-left: 10px;
    color: #00c853;
    margin-bottom: 20px;
  }

  > h2 {
    color: #00c853;
    font-family: "Share Tech Mono", monospace;
  }
`;
