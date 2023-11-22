import { useQuery } from "@apollo/client";
import { PageContainer } from "./PageStyles";
import { useNavigate } from "react-router-dom";
import { GET_USER } from "../graphql/getUser";

const OverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { loading, error, data } = useQuery(GET_USER, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const userName = data.Viewer.Auth.currentUser.user.name;
  return (
    <PageContainer>
      <h4>Welcome {userName}</h4>
      <p>Here is a list of nodes: </p>
      <button type="button" onClick={() => handleLogout()}>
        Logout
      </button>
    </PageContainer>
  );
};
export default OverviewPage;
