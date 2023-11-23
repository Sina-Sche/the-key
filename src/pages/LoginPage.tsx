import LoginForm from "../components/LoginForm";
import Welcome from "../components/Welcome";
import { PageContainer } from "./PageStyles";

const LoginPage: React.FC = () => (
  <PageContainer data-testid="login">
    <Welcome />
    <LoginForm />
  </PageContainer>
);

export default LoginPage;
