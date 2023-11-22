export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    hover: string;
    accent: string;
    hoverAccent: string;
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
  breakpoints: {
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
    accent: "#ff5858",
    hoverAccent: "#d63939",
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
  breakpoints: {
    small: "480px",
    medium: "768px",
    large: "1024px",
  },
};

export default theme;
