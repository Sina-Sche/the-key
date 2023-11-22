import { useNavigate } from "react-router-dom";
import { Button } from "./LogoutButtonStyles";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Button
      type="button"
      onClick={() => handleLogout()}
      data-testid="logoutButton"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
