const uri = "http://localhost:3000/api/v1/status";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(uri);
  expect(response.status).toBe(200);
});
