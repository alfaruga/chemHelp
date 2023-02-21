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
  test("can get a single element using IDs", async () => {
    const elementsInDb = await helper.elementsInDb();
    const testElement = elementsInDb[0];
    console.log("Element to test", testElement);

    const response = await api
      .get(`/api/elements/${testElement.id}`)
      .expect(200)
      .expect("Content-type", /application\/json/);

    expect(response.body).toEqual(testElement);
  }, 10000);

  test("can get a single element using symbols", async () => {
    const symbol = "C";

    //const elementsInDb = await helper.elementsInDb();
    //const element = elementsInDb.find((e) => e.symbol === "C");
    //console.log(`Symbol from local ${symbol}, element from db:`, element);

    const response = await api
      .get(`/api/elements/${symbol}`)
      .expect(200)
      .expect("Content-type", /application\/json/);

    console.log("body for symbol", response.body);
    expect(response.body.symbol).toEqual(symbol);
  });

  test("can get the mass for single element using symbols", async () => {
    const symbol = "C";
    const mass = 12.011;
    //const elementsInDb = await helper.elementsInDb();
    //const element = elementsInDb.find((e) => e.symbol === "C");
    //console.log(`Symbol from local ${symbol}, element from db:`, element);

    const response = await api
      .get(`/api/elements/${symbol}`)
      .expect(200)
      .expect("Content-type", /application\/json/);

    console.log("body for symbol", response.body);
    expect(Number(response.body.am)).toEqual(mass);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
