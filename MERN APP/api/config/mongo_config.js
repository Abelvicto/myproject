require("dotenv").config({ path: "api/.env" });
const mongoose = require("mongoose");
const uri = `mongodb+srv://mega_tech:@cluster0.k6njc.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  await mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB connection successful!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;

/*const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection successful!");
    })
    .catch((err) => {
      console.log(err);
    });
};
*/
module.exports = connect;

/*try {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
  console.log(error);
  process.exit(1);
}*/
