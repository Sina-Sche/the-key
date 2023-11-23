import { PageContainer } from "./PageStyles";
import ContentNodesList from "../components/ContentNodesList";
import { LogoutButton, LogoutIconButton } from "../components/Logout";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const OverviewPageContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.large};
`;

const OverviewPage: React.FC = () => {
  const token = localStorage.getItem("token");

  return (
    <OverviewPageContainer>
      <LogoutIconButton />
      <Dashboard />
      <ContentNodesList token={token} />
      <LogoutButton />
    </OverviewPageContainer>
  );
};
export default OverviewPage;
