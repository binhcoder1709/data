import express from "express";
import userRouter from "./routes/user.route.js";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("server is running");
});
