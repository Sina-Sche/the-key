import AcademyIcon from "../assets/AcademyIcon";
import { LoginContainer } from "./WelcomeStyles";

const Welcome: React.FC = () => {
  return (
    <LoginContainer>
      <AcademyIcon />
      <p>Welcome</p>
      <p>Please login to continue</p>
    </LoginContainer>
  );
};

export default Welcome;
