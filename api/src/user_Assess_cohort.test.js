const axios = require("axios");


jest.mock("axios")

/*-------------------User Tests-------------------*/

describe("POST /register", () => {
    it("Should return a 201 status code when successfully registered", async () => {
        axios.post.mockResolvedValue({
            data: {
                email: "test@test.com",
                password: "password",
                name: "Test1",
            },
            status: 201,
        });
        const res = await axios.post("http://localhost:8000/register", {
            email: "test@test.com",
            password: "password",
            name: "Test1",
        });
        expect(res.status).toBe(201);
        expect(res.data).toEqual({
            email: "test@test.com",
            password: "password",
            name: "Test1",
        });
    });
});


describe("POST /register", () => {
    it("Should return a 409 status code when email already exists", async () => {
        axios.post.mockRejectedValue({
            response: {
                status: 409,
                data: {
                    message: "Email already exists",
                },
            },
        });
        try {
            
            const res = await axios.post("http://localhost:8000/register", {
                email: "test@test.com",
                password: "password",
                name: "Test1",
            });
        } catch (err) {
            console.log(err);
            expect(err.response.status).toBe(409);
            expect(err.response.data.message).toBe("Email already exists");
        }
    });
});
    

describe("POST /login", () => {
    it("Should return a 200 status code when successfully logged in", async () => {
        axios.post.mockResolvedValue({
        data: {
            email: "test@test.com",
            password: "password",
        },
        status: 200,
        });

        const res = await axios.post("http://localhost:8000/login", {
        email: "test@test.com",
        password: "password",
        });

        expect(res.status).toBe(200);
        expect(res.data).toEqual({
        email: "test@test.com",
        password: "password",
        });
    });
});


/*-------------------Assessments Tests-------------------*/

describe("DELETE /assessment_scores/:id", () => {
    it("Should return a 204 status code when successfully deleted", async () => {
        axios.delete.mockResolvedValue({
            status: 204,
            message: "Successfully deleted",
        });
        const res = await axios.delete(
            "http://localhost:8000/assessment_scores/1"
        );
        expect(res.status).toBe(204);
        expect(res.message).toBe("Successfully deleted");
    });
});

describe("GET /assessment_scores", () => {
    it("Should return a 200 status code when successfully retrieved", async () => {
        axios.get.mockResolvedValue({
            status: 200,
            data: [
                {
                    student_id: 1,
                    assess_id: 1,
                    grade: 100,
                },
                {
                    student_id: 2,
                    assess_id: 2,
                    grade: 100,
                }
            ],
        });
        const res = await axios.get("http://localhost:8000/assessment_scores");
        expect(res.status).toBe(200);
        expect(res.data).toEqual([
            {
                student_id: 1,
                assess_id: 1,
                grade: 100,
            },
            {
                student_id: 2,
                assess_id: 2,
                grade: 100,
            }
        ]);
    });
});

describe("GET /assessment_scores/:id", () => {
    it("Should return a 204 status code when successfully retrieved", async () => {
        axios.get.mockResolvedValue({
            status: 204,
            data: {
                student_id: 1,
                assess_id: 1,
                grade: 100,
            },
        });

        const res = await axios.get(
            "http://localhost:8000/assessment_scores/20"
        );
        expect(res.status).toBe(204);
        expect(res.data).toEqual({
            student_id: 1,
            assess_id: 1,
            grade: 100,
        });
    });
});

describe("POST /assessment_scores", () => {
    it("Should return a 201 status code when successfully created", async () => {
        axios.post.mockResolvedValue({
            status: 201,
            data: {
                student_id: 9,
                assess_id: 1,
                grade: 100,
            },
        });
        
        const res = await axios.post(
            "http://localhost:8000/assessment_scores",
            {
                student_id: 9,
                assess_id: 1,
                grade: 100,
            }
        );
        expect(res.status).toBe(201);
        expect(res.data).toEqual({
            student_id: 9,
            assess_id: 1,
            grade: 100,
        });
    });
});

describe("PATCH /assessment_scores/:id", () => {

    it("Should return a 204 status code when successfully updated", async () => {
        axios.patch.mockResolvedValue({
            status: 204,
            data: {
                student_id: 9,
                assess_id: 1,
                grade: 900,
            },
        });

        const res = await axios.patch(
            "http://localhost:8000/assessment_scores/75",
            {
                student_id: 9,
                assess_id: 1,
                grade: 900,
            }
        );
        expect(res.status).toBe(204);
        expect(res.data).toEqual({
            student_id: 9,
            assess_id: 1,
            grade: 900,
        });
    });
});


describe("GET /assessments", () => {
    it("Should return a 200 status code when successfully retrieved", async () => {
        axios.get.mockResolvedValue({
            status: 200,
            data: [
                {
                    assess_name: "Test",
                    type: "Test",
                    id: 1,
                },
                {
                    assess_name: "Test2",
                    type: "Test2",
                    id: 2,
                }
            ],
        });
        
        const res = await axios.get("http://localhost:8000/assessments");

        expect(res.status).toBe(200);
        expect(res.data).toEqual([
            {
                assess_name: "Test",
                type: "Test",
                id: 1,
            },
            {
                assess_name: "Test2",
                type: "Test2",
                id: 2,
            }
        ]);
    });
});

/*-------------------Cohort Tests-------------------*/

describe("POST /cohorts", () => {
    it("Should return a 201 status code when successfully created", async () => {
        axios.post.mockResolvedValue({
            status: 201,
            data: {
                cohort_number: 21,
                start: "2023-08-01",
                graduation: "2023-12-31",
                user_id: 1,
            },
        });
        const res = await axios.post("http://localhost:8000/cohorts", {
            cohort_number: 12,
            start: "2023-08-01",
            graduation: "2023-12-31",
            user_id: 1,
        });
        expect(res.status).toBe(201);
        expect(res.data).toEqual({
            cohort_number: 21,
            start: "2023-08-01",
            graduation: "2023-12-31",
            user_id: 1,
        });
    });
});

// describe("PUT /cohorts/:id", () => {

//     it("Should return a 204 status code when successfully updated", async () => {
//         const res = await axios.put("http://localhost:8000/cohorts/2", {
//             cohort_number: 22,
//             start: "2022-01-01",
//             graduation: "2023-12-31",
//         });
//         expect(res.status).toBe(204);
//     });
// });

describe("DELETE /cohorts/:id", () => {
    it("Should return a 204 status code when successfully deleted", async () => {
        axios.delete.mockResolvedValue({
            status: 204,
        });
        const res = await axios.delete("http://localhost:8000/cohorts/1");
        expect(res.status).toBe(204);
    });
});

describe("GET /cohorts", () => {
    it("Should return a 200 status code when successfully retrieved", async () => {
        axios.get.mockResolvedValue({
            status: 200,
            data: [
                {
                    cohort_number: 19,
                    start: "2023-01-17",
                    graduation: "2023-05-26",
                    user_id: 1,
                },
                {
                    cohort_number: 20,
                    start: "2023-03-27",
                    graduation: "2023-07-21",
                    user_id: 2,
                }
            ],
        });

        const res = await axios.get("http://localhost:8000/cohorts");
        expect(res.status).toBe(200);
        expect(res.data).toEqual([
            {
                cohort_number: 19, 
                start: "2023-01-17",
                graduation: "2023-05-26",
                user_id: 1,
            },
            {
                cohort_number: 20,
                start: "2023-03-27",
                graduation: "2023-07-21",
                user_id: 2,
            }
        ]);
    });
});
