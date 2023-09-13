const cors = require("cors");
const express = require("express");
const app = express();
const connectDatabase = require("../backend/database/database");

const authRoutes = require("./routes/authRoute");
const taskRouter = require("./routes/taskRoute");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/task", taskRouter);

// localhost:4000/auth/register
/* connect DB */
connectDatabase();
const port = 4000;

app.listen(port, () => {
  console.log(`server is running on port`, port);
});
