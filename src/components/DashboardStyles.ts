import styled from "styled-components";

export const DashboardContainer = styled.header`
  text-align: center;
  background-image: ${(props) => props.theme.gradient};
  margin: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 15px;
  color: ${(props) => props.theme.colors.textDark};
  width: 90%;
`;

export const SmallText = styled.p`
  font-size: ${(props) => props.theme.font.fontSize.small};
`;
