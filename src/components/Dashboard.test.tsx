import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_USER } from "../graphql/getUser";
import Dashboard from "./Dashboard";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const mocks = [
  {
    request: {
      query: GET_USER,
    },
    result: {
      data: {
        Viewer: {
          Auth: {
            currentUser: {
              user: {
                name: "John Doe",
              },
            },
          },
        },
      },
    },
  },
];

describe("Dashboard", () => {
  it("renders loading state, then user's name", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Dashboard />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    const text = await screen.findByTestId("greeting");
    expect(text).toBeInTheDocument();
    const subtitle = await screen.findByText(
      "Nice to see you here! Let's get you started with your next lessons:"
    );
    expect(subtitle).toBeInTheDocument();
  });

  it("renders AuthError on query error", async () => {
    const errorMock = [
      {
        request: {
          query: GET_USER,
        },
        error: new Error("An error occurred"),
      },
    ];

    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <MockedProvider mocks={errorMock} addTypename={false}>
            <Dashboard />
          </MockedProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong, please login again")
      ).toBeInTheDocument();
    });
  });
});
