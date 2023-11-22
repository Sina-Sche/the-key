import { useQuery } from "@apollo/client";
import { PageContainer } from "./PageStyles";
import { GET_USER, UserResponse } from "../graphql/getUser";
import ContentNodesList from "../components/ContentNodesList";
import LogoutButton from "../components/LogoutButton";

const OverviewPage: React.FC = () => {
  const token = localStorage.getItem("token");

  const { loading, error, data } = useQuery<UserResponse>(GET_USER, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!token) return null;

  const userName = data?.Viewer.Auth.currentUser.user.name;

  return (
    <PageContainer>
      <h4>Hey {userName}</h4>
      <p>Here are your next lessons </p>
      <ContentNodesList token={token} />
      <LogoutButton />
    </PageContainer>
  );
};
export default OverviewPage;
