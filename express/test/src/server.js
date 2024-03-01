const express = require("express")
const app = express();
const userRouter = require("./routes/index.js")

app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running with port:${PORT}`);
});
