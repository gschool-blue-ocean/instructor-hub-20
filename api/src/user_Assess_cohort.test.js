import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import axios from "axios";

describe("POST /register", () => {
  it("Should return a 201 status code when successfully registered", async () => {
    const res = await axios.post("http://localhost:8000/register", {
      email: "test@test.com",
      password: "password",
      name: "Test",
    });
    expect(res.status).toBe(201);
  });

  it("Should return a 409 status code when email already exists", async () => {
    const res = await axios.post("http://localhost:8000/register", {
      email: "test@test.com",
      password: "password",
      name: "Test",
    });
    expect(res.status).toBe(409);
  });
});

describe("POST /login", () => {
  it("Should return a 200 status code when successfully logged in", async () => {
    const res = await axios.post("http://localhost:8000/login", {
      email: "test@test.com",
      password: "password",
    });
    expect(res.status).toBe(200);
  });
});

describe("GET /assessment_scores/19", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    const res = await axios.get("http://localhost:8000/assessment_scores/19");
    expect(res.status).toBe(200);
  });
});

describe("PATCH /assessment_scores/1", () => {
  it("Should return a 200 status code when successfully updated", async () => {
    const res = await axios.patch("http://localhost:8000/assessment_scores/1", {
      grade: 10000,
      student_id: 1,
      assess_id: 1,
    });
    expect(res.status).toBe(204);
  });
});

describe("GET /cohorts", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    const res = await axios.get("http://localhost:8000/cohorts");
    expect(res.status).toBe(200);
  });
});
