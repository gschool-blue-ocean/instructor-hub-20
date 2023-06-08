import React from "react";
import { it, vi, expect, afterEach, beforeAll, afterAll } from "vitest";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import App from "./App.jsx";

it("base passing test", () => {
  const input = true;
  const expected = true;
  const result = input;

  expect(result).toEqual(expected);
});
