export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    hover: string;
  };
  font: {
    fontSize: {
      small: string;
      standard: string;
      large: string;
    };
    fontFamily: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
}

const theme: Theme = {
  colors: {
    primary: "black",
    secondary: "#247ac7",
    text: "white",
    background: "green",
    hover: "#13568a",
  },
  font: {
    fontSize: {
      small: "12px",
      standard: "16px",
      large: "20px",
    },
    fontFamily: "Verdana",
  },
  spacing: {
    small: "10px",
    medium: "15px",
    large: "20px",
  },
};

export default theme;
