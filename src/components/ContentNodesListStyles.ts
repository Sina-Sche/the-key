import styled from "styled-components";

export const List = styled.ul`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: flex;
    flex-wrap: wrap;
    margin: ${(props) => props.theme.spacing.large};
  }
`;
export const ListElement = styled.li`
  margin: ${(props) => props.theme.spacing.large};
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    height: 30vh;
    width: 200px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  margin: ${(props) => props.theme.spacing.large};
`;

export const Img = styled.img`
  width: 250px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 400px;
  }
`;
