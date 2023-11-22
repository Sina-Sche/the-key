import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff5858; /* Red color, you can change this */
  color: #fff; /* White text, you can change this */
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d63939; /* Darker red on hover, you can change this */
  }
`;
