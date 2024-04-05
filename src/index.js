const express = require("express");
const tasksRouter = require("./tasks/tasks.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use("/api/tasks", tasksRouter);
app.use(errorMiddleware);

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
