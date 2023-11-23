import React from "react";
import { render, act, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_CONTENT_NODES } from "../graphql/getContentNodes";
import ContentNodesList from "./ContentNodesList";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

jest.mock("../types", () => ({
  User: jest.fn(),
}));

const mocks = [
  {
    request: {
      query: GET_CONTENT_NODES,
    },
    result: {
      data: {
        Admin: {
          Tree: {
            GetContentNodes: {
              edges: [
                {
                  node: {
                    structureDefinition: {
                      title: "Lesson 1",
                    },
                    image: {
                      url: "lesson1.jpg",
                    },
                  },
                },
                {
                  node: {
                    structureDefinition: {
                      title: "Lesson 2",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
];

describe("ContentNodesList", () => {
  it("renders loading state, then content nodes", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ContentNodesList token="mockToken" />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for next tick
    });

    expect(screen.getByText("Lesson 1")).toBeInTheDocument();
    expect(screen.getByText("Lesson 2")).toBeInTheDocument();
  });

  it("renders error state", async () => {
    const errorMock = [
      {
        request: {
          query: GET_CONTENT_NODES,
        },
        error: new Error("An error occurred"),
      },
    ];
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={errorMock} addTypename={false}>
          <ContentNodesList token="mockToken" />
        </MockedProvider>
      </ThemeProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "An error occurred",
      })
    );
  });
});
