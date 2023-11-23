import { Input } from "./LoginFormStyles";
import ValidationError from "./ValidationError";

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (e) => void;
  placeholder: string;
  testId: string;
  error: string;
}
const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  testId,
  error,
}) => {
  return (
    <div>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        data-testid={testId}
      />
      {error ? <ValidationError error={error} type={"email"} /> : null}
    </div>
  );
};

export default InputField;
