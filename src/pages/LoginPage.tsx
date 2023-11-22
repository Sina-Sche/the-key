import LoginForm from "../components/LoginForm";
import Welcome from "../components/Welcome";
import { PageContainer } from "./PageStyles";

const LoginPage = () => (
  <PageContainer>
    <Welcome />
    <LoginForm />
  </PageContainer>
);

export default LoginPage;
