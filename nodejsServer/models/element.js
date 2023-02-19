const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  name: String,
  z: Number,
  am: Number,
  isotopes: String,
  symbol: String,
});
elementSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Element", elementSchema);
