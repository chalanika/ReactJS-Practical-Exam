import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

describe("test 1", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
