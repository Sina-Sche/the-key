import styled from "styled-components";

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the overlay is on top of other elements */
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1); /* Light border */
  border-radius: 50%;
  border-top: 4px solid #3498db; /* Blue border on top */
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite; /* Rotation animation */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
