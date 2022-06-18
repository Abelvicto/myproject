const express = require("express");
const app = express();
const port_number = process.env.PORT || 3000;
const server = require("http").createServer(app);
require("./config/mongo_config")();
const authRoute = require("./routes/auth");

//use and set express middleware
app.use(express.json({ limit: "800kb" }));

//0026090
//load routes
app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
  console.log(" you are their");
});

server.listen(port_number, function () {
  console.log(`server listening on port ${port_number}`);
});

/*const express = require("express");
const app = express();
const port_number = process.env.PORT || 3000;
const server = require("http").createServer(app);
const connectDB = require("./config/mongo_config");

connectDB();

//use and set express middleware
app.use(express.json());

//load routes
app.use("/api/auth", require("./routes/auth"));

server.listen(port_number, function () {
  console.log(`server listening on port ${port_number}`);
});*/

/*const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
app.use(express.json());
const connectDb = require("./mongo_config");
connectDb();

app.use("/api/routes/auth", authRoute);

app.use("/lama", (req, res) => {
  console.log(" you are their");
});
app.listen("3000", () => {
  console.log("hello world.");
});
//.then(console.log("hey"))
//.catch((err) => console.log(err));
*/
