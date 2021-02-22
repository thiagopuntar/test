const request = require("supertest");
const server = require("../../src/server");
const db = require("../../src/db/knex");

const domain = "/api/v1/offers";

describe("Offer", () => {
  beforeAll(async () => {
    await db.migrate.latest();
  });

  describe("List All", () => {
    it("should return all offers", async () => {
      const response = await request(server).get(domain);
    });
  });
});
