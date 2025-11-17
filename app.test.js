const request = require('supertest')
const app = require('./index.js')
let server;

beforeAll((done) => {
  server = app.listen(done);
})

afterAll((done) => {
  server.close(done);
})

describe("GET /", () => {
  it("should return a greeting message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("My name is Admin");
  });
});

