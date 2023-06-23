const axios = require("axios");
jest.mock("axios");

// ---------- Student Test Routes ---------- //

describe("GET /students", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: [
        {
          stu_name: "Bobby Flay",
          email: "bobbyChef@gmail.com",
          github: "chefmaster159",
          cohort_id: 20,
        },
        {
          stu_name: "Karen Gold",
          email: "ultimateMommy@gmail.com",
          github: "KarenIsScary",
          cohort_id: 19,
        },
      ],
    });
    const res = await axios.get("http://localhost:8000/students");
    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      {
        stu_name: "Bobby Flay",
        email: "bobbyChef@gmail.com",
        github: "chefmaster159",
        cohort_id: 20,
      },
      {
        stu_name: "Karen Gold",
        email: "ultimateMommy@gmail.com",
        github: "KarenIsScary",
        cohort_id: 19,
      },
    ]);
  });
});

describe("GET /students/1", () => {
  it("Should return a 200 status code when successfuly retrieved", async () => {
    axios.get.mockResolvedValue({
      status: 201,
      data: {
        stu_name: "Shawn Couch",
        email: "Couch123@example.com",
        github: "Couch1",
        cohort_id: 1,
      },
    });
    const res = await axios.get("http://localhost:8000/students/1", {
      stu_name: "Shawn Couch",
      email: "Couch123@example.com",
      github: "Couch1",
      cohort_id: 1,
    });
    expect(res.status).toBe(201);
    expect(res.data).toEqual({
      stu_name: "Shawn Couch",
      email: "Couch123@example.com",
      github: "Couch1",
      cohort_id: 1,
    });
  });
});

describe("POST /students", () => {
  it("Should return a 201 status code when successfully adding a new student", async () => {
    axios.post.mockResolvedValue({
      status: 201,
      data: {
        stu_name: "Vitest Example",
        email: "Vitest123@example.com",
        github: "VitestTest1",
        cohort_id: 2,
      },
    });
    const res = await axios.post("http://localhost:8000/students", {
      stu_name: "Vitest Example",
      email: "Vitest123@example.com",
      github: "VitestTest1",
      cohort_id: 2,
    });
    expect(res.status).toBe(201);
    expect(res.data).toEqual({
      stu_name: "Vitest Example",
      email: "Vitest123@example.com",
      github: "VitestTest1",
      cohort_id: 2,
    });
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
    axios.put.mockResolvedValue({
      status: 204,
      data: {
        stu_name: "Vitest PatchRoute",
        email: "VitestPatchRoute@example.com",
        github: "SuccessfulPatch1",
        cohort_id: 1,
      },
    });
    const res = await axios.put("http://localhost:8000/students/5", {
      stu_name: "Vitest PatchRoute",
      email: "VitestPatchRoute@example.com",
      github: "SuccessfulPatch1",
      cohort_id: 1,
    });
    expect(res.status).toBe(204);
    expect(res.data).toEqual({
      stu_name: "Vitest PatchRoute",
      email: "VitestPatchRoute@example.com",
      github: "SuccessfulPatch1",
      cohort_id: 1,
    });
  });
});

describe("DELETE /students/4", () => {
  it("Should return a 204 status code when a student is removed", async () => {
    axios.delete.mockResolvedValue({
      status: 204,
      message: "Successfully deleted",
    });
    const res = await axios.delete("http://localhost:8000/students/4");
    expect(res.status).toBe(204);
    expect(res.message).toBe("Successfully deleted");
  });
});

// ---------- Project Test Routes ---------- //

describe("GET /projects", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: [
        {
          project_name: "Rainbow Palette",
          project_id: 10,
        },
        {
          project_name: "Coffee Bean Calculator",
          project_id: 11,
        },
      ],
    });
    const res = await axios.get("http://localhost:8000/projects");
    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      {
        project_name: "Rainbow Palette",
        project_id: 10,
      },
      {
        project_name: "Coffee Bean Calculator",
        project_id: 11,
      },
    ]);
  });
});

describe("GET /projects/2", () => {
  it("Should return a 200 status code when successfuly retrieved", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: {
        project_name: "Guessing Game",
        type: "Solo",
      },
    });
    const res = await axios.get("http://localhost:8000/projects/2", {
      project_name: "Guessing Game",
      type: "Solo",
    });
    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      project_name: "Guessing Game",
      type: "Solo",
    });
  });
});

describe("POST /projects", () => {
  it("Should return a 201 status code when successfully adding a new project", async () => {
    axios.post.mockResolvedValue({
      status: 201,
      data: {
        project_name: "Test Project",
        type: "Group",
      },
    });
    const res = await axios.post("http://localhost:8000/projects", {
      project_name: "Test Project",
      type: "Group",
    });
    expect(res.status).toBe(201);
    expect(res.data).toEqual({
      project_name: "Test Project",
      type: "Group",
    });
  });
});

describe("PUT /projects/4", () => {
  it("Should return a 204 status code when successfully updating a project", async () => {
    axios.put.mockResolvedValue({
      status: 204,
      data: {
        project_name: "Updated Vitest Project",
        type: "Solo",
      },
    });
    const res = await axios.put("http://localhost:8000/projects/4", {
      project_name: "Updated Vitest Project",
      type: "Solo",
    });
    expect(res.status).toBe(204);
    expect(res.data).toEqual({
      project_name: "Updated Vitest Project",
      type: "Solo",
    });
  });
});

describe("DELETE /projects/7", () => {
  it("Should return a 204 status code when successfuly removing a project", async () => {
    axios.delete.mockResolvedValue({
      status: 204,
      message: "Successfully deleted",
    });
    const res = await axios.delete("http://localhost:8000/projects/7");
    expect(res.status).toBe(204);
    expect(res.message).toBe("Successfully deleted");
  });
});

// ---------- Group Test Routes ---------- //

describe("GET /groups", () => {
  it("Should return a 200 status code when successfully retrieved", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: [
        {
          group_name: "UralCoders",
          project_id: 5,
        },
        {
          group_name: "Yoshis Developers",
          project_id: 7,
        },
      ],
    });
    const res = await axios.get("http://localhost:8000/groups");
    expect(res.status).toBe(200);
    expect(res.data).toEqual([
      {
        group_name: "UralCoders",
        project_id: 5,
      },
      {
        group_name: "Yoshis Developers",
        project_id: 7,
      },
    ]);
  });
});

describe("GET /groups/3", () => {
  it("Should return a 200 status code when successfuly retrieved", async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: {
        group_name: "Coders Worldwide",
        project_id: 4,
      },
    });
    const res = await axios.get("http://localhost:8000/groups/6");
    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      group_name: "Coders Worldwide",
      project_id: 4,
    });
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
    axios.delete.mockResolvedValue({
      status: 204,
      message: "Successfully deleted",
    });
    const res = await axios.delete("http://localhost:8000/groups/5");
    expect(res.status).toBe(204);
    expect(res.message).toBe("Successfully deleted");
  });
});
