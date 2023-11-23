import { Button, IconButton } from "./LogoutButtonStyles";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../assets/icons/LogoutIcon";

export const LogoutButton = () => {
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

export const LogoutIconButton = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  return (
    <IconButton
      type="button"
      onClick={() => {
        handleLogout();
        navigate("/");
      }}
    >
      <LogoutIcon />
    </IconButton>
  );
};
