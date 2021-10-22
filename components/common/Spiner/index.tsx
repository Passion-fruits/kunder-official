import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export default function Spiner({ size }) {
  const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

  const Loading = styled.div`
    display: inline-block;
    width: ${`${size}px`};
    height: ${`${size}px`};
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: ${spin} 0.5s infinite linear;
    -webkit-animation: ${spin} 0.5s infinite linear;
  `;
  return <Loading />;
}
