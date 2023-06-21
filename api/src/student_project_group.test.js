import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import axios from "axios";

// ---------- Student Test Routes ---------- //

describe("GET /students", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    const res = await axios.get("http://localhost:8000/students");
    expect(res.status).toBe(200);
  });
});

describe("GET /students/1", () => {
  it("Should return a 200 status code when successfuly retrieved", async () => {
    const res = await axios.get("http://localhost:8000/students/1", {
      stu_name: "Shawn Couch",
      email: "Couch123@example.com",
      github: "Couch1",
      cohort_id: 1,
    });
    expect(res.status).toBe(201);
  });
});

describe("POST /students", () => {
  it("Should return a 201 status code when successfully adding a new student", async () => {
    const res = await axios.post("http://localhost:8000/students", {
      stu_name: "Vitest Example",
      email: "Vitest123@example.com",
      github: "VitestTest1",
      cohort_id: 2,
    });
    expect(res.status).toBe(201);
  });

  //   it("Should return a 409 status code when the student already exists", async () => {
  //     const res = await axios.post("http://localhost:8000/students", {
  //       stu_name: "Vitest Example",
  //       email: "Vitest123@example.com",
  //       github: "VitestTest1",
  //       cohort_id: 2,
  //     });
  //     expect(res.status).toBe(409);
  //   });
});

describe("PUT /students/5", () => {
  it("Should return a 204 status code when successfully updated", async () => {
    const res = await axios.put("http://localhost:8000/students/5", {
      stu_name: "Vitest PatchRoute",
      email: "VitestPatchRoute@example.com",
      github: "SuccessfulPatch1",
      cohort_id: 1,
    });
    expect(res.status).toBe(204);
  });
});

describe("DELETE /students/4", () => {
  it("Should return a 204 status code when a student is removed", async () => {
    const res = await axios.delete("http://localhost:8000/students/4");
    expect(res.status).toBe(204);
  });
});

// ---------- Project Test Routes ---------- //

describe("GET /projects", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    const res = await axios.get("http://localhost:8000/projects");
    expect(res.status).toBe(200);
  });
});

describe("GET /projects/2", () => {
  it("Should return a 200 status code when successfuly retrieved", async () => {
    const res = await axios.get("http://localhost:8000/projects/2", {
      project_name: "Guessing Game",
      type: "Solo",
    });
    expect(res.status).toBe(200);
  });
});

describe("POST /projects", () => {
  it("Should return a 201 status code when successfully adding a new project", async () => {
    const res = await axios.post("http://localhost:8000/projects", {
      project_name: "Test Project",
      type: "Group",
    });
    expect(res.status).toBe(201);
  });
});

describe("PUT /projects/4", () => {
  it("Should return a 204 status code when successfully updating a project", async () => {
    const res = await axios.put("http://localhost:8000/projects/4", {
      project_name: "Updated Vitest Project",
      type: "Solo",
    });
    expect(res.status).toBe(204);
  });
});

describe("DELETE /projects/7", () => {
  it("Should return a 204 status code when successfuly removing a project", async () => {
    const res = await axios.delete("http://localhost:8000/projects/7");
    expect(res.status).toBe(204);
  });
});

// ---------- Group Test Routes ---------- //

describe("GET /groups", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    const res = await axios.get("http://localhost:8000/groups");
    expect(res.status).toBe(200);
  });
});

describe("GET /groups/1", () => {
  it("Should return a 200 status code when successfuly retrieved", async () => {
    const res = await axios.get("http://localhost:8000/groups/1");
    expect(res.status).toBe(200);
  });
});

// describe("POST /groups", () => {
//   it("Should return a 201 status code when successfully adding a new group", async () => {
//     const res = await axios.post("http://localhost:8000/groups", {
//       group_name: "Vitest Test Group",
//       project_id: 7,
//     });
//     expect(res.status).toBe(201);
//   });
// });

// describe("PATCH /groups/3", () => {
//   it("Should return a 204 status code when successfully updating a group", async () => {
//     const res = await axios.patch("http://localhost:8000/groups/3", {
//       group_name: "New Vitest Rockers",
//       project_id: 8,
//     });
//     expect(res.status).toBe(204);
//   });
// });

describe("DELETE /groups/5", () => {
  it("Should return a 204 status code when successfuly removing a group", async () => {
    const res = await axios.delete("http://localhost:8000/groups/5");
    expect(res.status).toBe(204);
  });
});
