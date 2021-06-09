//models/animals.js

const { Schema, model, SchemaTypes } = require("mongoose");

const AnimalSchema = new Schema({
    type: SchemaTypes.String,
    breed: SchemaTypes.String,
    name: SchemaTypes.String,
    genger: SchemaTypes.String,
    colors: SchemaTypes.Array
})

const Animal = model("Animal", AnimalSchema)

module.exports = Animal