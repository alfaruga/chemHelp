const mongoose = require("mongoose");
const supertest = require("supertest");
const { response } = require("../app");
const app = require("../app");
const Element = require("../models/element");
const api = supertest(app);
const helper = require("./test_helper");

beforeEach(async () => {
  //This clears my DB, makes an array of Element objects, saves each element as promise, and it
  //saves them as an array of promises, when all element promises were resolved, the Promise.all() method
  //is fullfiled as a single promise that consists of all the promises, i.e. DB is populated and ready to use!

  await Element.deleteMany({});
  const listEleObjects = helper.localElements.map((e) => new Element(e));
  const arrOfPromises = listEleObjects.map((e) => e.save());

  await Promise.all(arrOfPromises);
}, 10000);

describe("Tests that get information from the database and don't modify it", () => {
  test("elements are returned as json", async () => {
    const response = await api
      .get("/api/elements")
      .expect(200)
      .expect("Content-type", /application\/json/);
    // console.log("TEST: Size of DB", response.body.length);
    expect(response.body).toHaveLength(helper.localElements.length);
  });

  test("can get the mass for single element using symbols", async () => {
    const element = ["C"];
    const mass = 12.011;

    const symbol = element[0];
    console.log("symbol from test:", symbol);
    const response = await api
      .get(`/api/elements/${symbol}`)
      .expect(200)
      .expect("Content-type", /application\/json/);

    expect(Number(response.body.am)).toEqual(mass);
  });

  test("gets the mass of two or more elements", async () => {
    const elementObj = ["C", "O"];

    var massArray = [];
    for (let index = 0; index < elementObj.length; index++) {
      const response = await api.get(`/api/elements/${elementObj[index]}`);
      console.log(response.body);
      massArray.push(response.body.am);
    }

    expect(Number(massArray[0])).toBe(12.011);
    expect(Number(massArray[1])).toBe(15.999);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
