import { OverviewPageContainer } from "./PageStyles";
import ContentNodesList from "../components/ContentNodesList";
import { LogoutIconButton } from "../components/Logout";
import Dashboard from "../components/Dashboard";

const OverviewPage: React.FC = () => {
  return (
    <OverviewPageContainer>
      <LogoutIconButton />
      <Dashboard />
      <ContentNodesList />
    </OverviewPageContainer>
  );
};
export default OverviewPage;
