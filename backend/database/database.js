const mongoose = require("mongoose");
DB_URI = "mongodb://localhost:27017/task-manager";
const connectDatabase = () => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
