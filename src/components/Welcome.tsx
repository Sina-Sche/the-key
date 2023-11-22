import AcademyIcon from "../assets/AcademyIcon";

const Welcome: React.FC = () => {
  return (
    <>
      <header data-testid="header">
        <AcademyIcon />
      </header>
      <p>Welcome</p>
      <p>Please login to continue</p>
    </>
  );
};

export default Welcome;
