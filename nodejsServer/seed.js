//Code to initializa the DB

const Element = require("./models/element");
const helper = require("./tests/test_helper");
const app = require("./app");
const config = require("./utils/config");

app.listen(config.PORT, () => {
  console.log(
    `Server running on port ${config.PORT}, conection ${config.MONGODB_URI}`
  );
});

const seedData = async () => {
  await Element.insertMany(helper.localElements);

  console.log("data seeded");
};
seedData();
