export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
  };
  font: {
    fontSize: {
      small: string;
      standard: string;
      large: string;
    };
    fontFamily: string;
  };
}

const theme: Theme = {
  colors: {
    primary: "black",
    secondary: "lightcoral",
    text: "white",
    background: "green",
  },
  font: {
    fontSize: {
      small: "5px",
      standard: "16px",
      large: "20px",
    },
    fontFamily: "Arial",
  },
};

export default theme;
