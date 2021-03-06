import React from "react";

import { render, cleanup, waitForElement, fireEvent, prettyDOM, getByText } from "@testing-library/react";
import Application from "components/Application";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

describe("Application", () => {

  it("changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);
  
    await waitForElement(() => getByText("Monday"));
  
    fireEvent.click(getByText("Tuesday"));
  
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
  
  it("loads data, books an interview, and reduces the spots remaining for the first day by 1", async () => {
    const { container } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    console.log(prettyDOM(container));
  });

})