import { ValidationErrorText } from "./LoginFormStyles";

interface ErrorProps {
  error: string;
  type: string;
}
const ValidationError: React.FC<ErrorProps> = ({ error, type }: ErrorProps) => {
  return (
    <label htmlFor={type}>
      <ValidationErrorText data-testId={"loginError"}>
        {error}
      </ValidationErrorText>
    </label>
  );
};

export default ValidationError;
