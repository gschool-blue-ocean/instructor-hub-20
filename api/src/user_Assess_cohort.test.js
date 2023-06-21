import { describe, it, expect, beforeAll, afterEach, afterAll} from "vitest"
import axios from "axios";


/*-------------------User Tests-------------------*/

  it("Should return a 201 status code when successfully registered", async () => {
    const res = await axios.post("http://localhost:8000/register", {
      email: "test@test.com",
      password: "password",
      name: "Test1",
    });
    expect(res.status).toBe(201);
  });

  it("Should return a 409 status code when email already exists", async () => {
    const res = await axios.post("http://localhost:8000/register", {
      email: "test@test.com"
    });
    expect(res.status).toBe(409);
  });
describe("POST /login", () => {
    it("Should return a 200 status code when successfully logged in", async () => {
        const res = await axios.post("http://localhost:8000/login", {
            email: "test@test.com",
            password: "password",
        })
        expect(res.status).toBe(200)
    })
})

/*-------------------Assessments Tests-------------------*/

describe("DELETE /assessment_scores/:id", () => {
    it("Should return a 204 status code when successfully deleted", async () => {
        const res = await axios.delete("http://localhost:8000/assessment_scores/1")
        expect(res.status).toBe(204)
    })
})

describe("GET /assessment_scores", () => {
    it("Should return a 204 status code when successfully retrieved", async () => {
        const res = await axios.get("http://localhost:8000/assessment_scores")
        expect(res.status).toBe(204)
    })
})

describe("GET /assessment_scores/:id", () => {
    it("Should return a 204 status code when successfully retrieved", async () => {
        const res = await axios.get("http://localhost:8000/assessment_scores/20")
        expect(res.status).toBe(204)
    })
})

describe("POST /assessment_scores", () => {
    it("Should return a 201 status code when successfully created", async () => {
        const res = await axios.post("http://localhost:8000/assessment_scores", {
            student_id: 9,
            assess_id: 1,
            grade: 100,
        })
        expect(res.status).toBe(201)
    })
})

describe("PATCH /assessment_scores/:id", () => {
    it("Should return a 204 status code when successfully updated", async () => {
        const res = await axios.patch("http://localhost:8000/assessment_scores/75", {
            student_id: 9,
            assess_id: 1,
            grade: 900
        })
        expect(res.status).toBe(204)
    })
})

describe("PUT /assessments/:id", () => {
    it("Should return a 204 status code when successfully updated", async () => {
        const res = await axios.put("http://localhost:8000/assessments/2", {
            assess_name: "Updated Assessment",
            type: "Updated Type"
        })
        expect(res.status).toBe(204)
    })
})

describe("GET /assessments", () => {
    it("Should return a 200 status code when successfully retrieved", async () => {
        const res = await axios.get("http://localhost:8000/assessments")
        expect(res.status).toBe(200)
    })
})

/*-------------------Cohort Tests-------------------*/

describe("POST /cohorts", () => {
    it("Should return a 201 status code when successfully created", async () => {
        const res = await axios.post("http://localhost:8000/cohorts", {
            cohort_number: 12,
            start: "2022-01-01",
            graduation: "2023-12-31",
            user_id: 1
        })
        expect(res.status).toBe(201)
    })
})

describe("PUT /cohorts/:id", () => {
    it("Should return a 204 status code when successfully updated", async () => {
        const res = await axios.put("http://localhost:8000/cohorts/2", {
            cohort_number: 22,
            start: "2022-01-01",
            graduation: "2023-12-31"
        })
        expect(res.status).toBe(204)
    })
})

describe("DELETE /cohorts/:id", () => {
    it("Should return a 204 status code when successfully deleted", async () => {
        const res = await axios.delete("http://localhost:8000/cohorts/1")
        expect(res.status).toBe(204)
    })
})

describe("GET /cohorts", () => {
    it("Should return a 200 status code when successfully retrieved", async () => {
        const res = await axios.get("http://localhost:8000/cohorts")
        expect(res.status).toBe(200)
    })
})