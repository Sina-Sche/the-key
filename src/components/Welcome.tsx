import { Headline, Img, LoginContainer } from "./WelcomeStyles";
import welcome from "../assets/placeholder.png";

const Welcome: React.FC = () => {
  return (
    <LoginContainer data-testid="welcome">
      <Img src={welcome} alt="woman on chair" data-testid="icon" />
      <Headline>Welcome</Headline>
      <p>Please login to continue</p>
    </LoginContainer>
  );
};

export default Welcome;
