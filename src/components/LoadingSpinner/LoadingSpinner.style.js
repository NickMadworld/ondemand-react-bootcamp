import styled, { keyframes } from "styled-components";

const spinner = keyframes`
   0% { transform: rotate(0deg); }
  100% {transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #383636;
  border-radius: 50%;
  animation-name: ${spinner};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

export const SpinnerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`;
