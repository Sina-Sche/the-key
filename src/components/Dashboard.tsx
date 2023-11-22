import { useQuery } from "@apollo/client";
import { GET_USER, UserResponse } from "../graphql/getUser";
import { AuthError } from "./AuthError";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  const { loading, error, data } = useQuery<UserResponse>(GET_USER, {
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
    <>
      <h4>Hey {userName}</h4>
      <p>Here are your next lessons </p>
    </>
  );
};

export default Dashboard;
