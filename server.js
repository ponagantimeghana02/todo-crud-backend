const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./users/userRouter");
const todoRouter = require("./todos/todosRouter");
const cors = require("cors");
const dbConnect = require("./config/db");
dotenv.config();

dbConnect();
app.use(express.json())
app.use(cors());

app.use("/users", userRouter);
app.use("/todos", todoRouter);

app.listen(process.env.PORT, () => {
  console.log("app listening");
});
