const express = require("express");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross origin request

app.use(cors());

//connect to mLab database
mongoose.connect(
  "mongodb://jitinbisht:test1234@ds145434.mlab.com:45434/gql-ninja"
);
mongoose.connection.once("open", () => {
  console.log("connected to the database...");
});

//middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for request on port 4000");
});
