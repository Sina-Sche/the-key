import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <header data-testid="header">
        <p>Welcome</p>
        <p>This will be the LoginPage</p>
        <button type="button" onClick={() => navigate("/overview")}>
          Login
        </button>
      </header>
    </Container>
  );
};

export default Welcome;
