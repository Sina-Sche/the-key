import AcademyIcon from "../assets/icons/AcademyIcon";
import { LoginContainer } from "./WelcomeStyles";

const Welcome: React.FC = () => {
  return (
    <LoginContainer data-testid="welcome">
      <AcademyIcon />
      <p>Welcome</p>
      <p>Please login to continue</p>
    </LoginContainer>
  );
};

export default Welcome;
