import { Button } from "./LogoutButtonStyles";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      onClick={() => {
        handleLogout();
        navigate("/");
      }}
      data-testid="logoutButton"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
