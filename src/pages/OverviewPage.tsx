import { PageContainer } from "./PageStyles";
import ContentNodesList from "../components/ContentNodesList";
import LogoutButton from "../components/LogoutButton";
import Dashboard from "../components/Dashboard";

const OverviewPage: React.FC = () => {
  const token = localStorage.getItem("token");

  return (
    <PageContainer>
      <Dashboard />
      <ContentNodesList token={token} />
      <LogoutButton />
    </PageContainer>
  );
};
export default OverviewPage;
