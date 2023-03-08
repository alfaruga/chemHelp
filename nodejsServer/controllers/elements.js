const elementsRouter = require("express").Router();
const { response } = require("../app");
const Element = require("../models/element");

elementsRouter.get("/home", async (request, response) => {
  console.log("hello world");
  response.send("<h1>hell!</h1>");
});

elementsRouter.get("/", async (request, response) => {
  const elements = await Element.find({});
  if (elements) {
    response.json(elements);
  } else {
    response.status(404).end();
  }
});

elementsRouter.get("/:symbol", async (request, response) => {
  console.log("symbol params", request.params.symbol);

  ///This works for two cases: If symbol is given or if symbol is given

  const element = await Element.findOne({ symbol: request.params.symbol });
  if (element) {
    response.json(element);
  } else {
    response.status(404).end("Element does not exist");
  }
});

elementsRouter.post("/", async (request, response) => {
  const body = request.body;

  const element = new Element({
    name: body.name,
    z: body.z,
    am: body.am,
    isotopes: body.isotopes,
    symbol: body.symbol,
  });

  const savedElement = element.save(element);
  response.status(201).json(savedElement);
});
module.exports = elementsRouter;
