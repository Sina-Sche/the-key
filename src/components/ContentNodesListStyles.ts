import styled from "styled-components";

export const List = styled.ul`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: flex;
    flex-wrap: wrap;
  }
  margin: ${(props) => props.theme.spacing.xlarge};
`;
export const ListElement = styled.li`
  margin: ${(props) => props.theme.spacing.xlarge};
  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    height: 30vh;
    width: 200px;
  }
  color: ${(props) => props.theme.colors.textDark};
`;

export const Title = styled.p`
  font-weight: bold;
  height: 20px;
  margin: ${(props) => props.theme.spacing.medium};
`;

export const Img = styled.img`
  width: 250px;
`;
