const elementsRouter = require("express").Router();
const { response } = require("../app");
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
  console.log("id params", request.params.id);

  ///This works for two cases: If symbol is given or if Id is given

  const regex = new RegExp("^[a-zA-Z]+$");

  if (regex.test(request.params.id)) {
    const element = await Element.findOne({ symbol: `${request.params.id}` });
    response.json(element);
    //console.log("Element from DB if it has symbol", element);
  } else {
    const element = await Element.findById(request.params.id);
    response.json(element);
    //console.log("Element from DB pure ID", element);
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

  element.save(element);
  response.json(element);
});
module.exports = elementsRouter;
