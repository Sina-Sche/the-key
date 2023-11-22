import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import Welcome from "../components/Welcome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const LoginPage = () => (
  <Container>
    <Welcome />
    <LoginForm />
  </Container>
);

export default LoginPage;
