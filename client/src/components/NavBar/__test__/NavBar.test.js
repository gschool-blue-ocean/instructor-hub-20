import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("should render the correct text", () => {
  const { getByText } = render(<NavBar />);

  const navbarTitle = getByText("Instructor Hub");
  expect(navbarTitle).toBeVisible();

  const dashboardButton = getByText("Dashboard");
  expect(dashboardButton).toBeVisible();

  const projectsButton = getByText("Projects");
  expect(projectsButton).toBeVisible();
});
