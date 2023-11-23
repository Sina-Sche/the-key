import { useQuery } from "@apollo/client";
import { GET_USER, UserResponse } from "../graphql/getUser";
import { AuthError } from "./AuthError";
import { DashboardContainer, SmallText } from "./DashboardStyles";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  const { loading, data, error } = useQuery<UserResponse>(GET_USER, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  // TODO - add loading skeleton
  if (loading) return <p>Loading...</p>;
  if (error) return <AuthError />;

  const userName = data?.Viewer.Auth.currentUser.user.name;
  return (
    <DashboardContainer>
      <h3>Hey {userName},</h3>
      <SmallText>
        Nice to see you here! Let's get you started with your next lessons:{" "}
      </SmallText>
    </DashboardContainer>
  );
};

export default Dashboard;
