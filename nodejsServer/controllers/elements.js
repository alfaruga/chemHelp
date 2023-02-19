const elementsRouter = require("express").Router();
const Element = require("../models/element");

elementsRouter.get("/home", async (request, response) => {
  console.log("hello world");
  response.send("<h1>hell!</h1>");
});

elementsRouter.get("/", async (request, response) => {
  const elements = await Element.find({});
  response.json(elements);
});

elementsRouter.get("/:id", async (request, response) => {
  const element = await Element.findById(request.params.id);
  console.log(element)
  response.json(element);
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

  element.save(element);
  response.json(element);
});
module.exports = elementsRouter;
