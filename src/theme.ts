export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    textDark: string;
    background: string;
    hover: string;
    accent: string;
    hoverAccent: string;
  };
  gradient: string;
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
    xlarge: string;
  };
  breakpoints: {
    small: string;
    medium: string;
    large: string;
  };
}

const theme: Theme = {
  colors: {
    primary: "#f3f5f8",
    secondary: "#247ac7",
    text: "white",
    textDark: "black",
    background: "green",
    hover: "#13568a",
    accent: "#ff5858",
    hoverAccent: "#d63939",
  },
  gradient: "linear-gradient(270deg,#dcf8e7,#a7cbe8)",
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
    xlarge: "30px",
  },
  breakpoints: {
    small: "480px",
    medium: "768px",
    large: "1024px",
  },
};

export default theme;
