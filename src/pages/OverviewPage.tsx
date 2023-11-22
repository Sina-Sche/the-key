import { PageContainer } from "./PageStyles";
import ContentNodesList from "../components/ContentNodesList";
import LogoutButton from "../components/LogoutButton";
import Dashboard from "../components/Dashboard";
import { AuthError } from "../components/AuthError";

const OverviewPage: React.FC = () => {
  const token = localStorage.getItem("token");
  if (!token) return <AuthError />;

  return (
    <PageContainer>
      <Dashboard />
      <ContentNodesList token={token} />
      <LogoutButton />
    </PageContainer>
  );
};
export default OverviewPage;
