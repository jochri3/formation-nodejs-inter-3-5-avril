const express = require("express");
const { generateUniqueId } = require("./utils/generate-unique-id.util");
const { loadFile, writeToFile } = require("./utils/file.utils");

const app = express();

app.use(express.json());

app.get("/api/tasks", async (req, res) => {
  console.log(req.helloMessage);
  try {
    const tasks = JSON.parse(await loadFile("tasks.json"));
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.get("/api/tasks/:id", async (req, res) => {
  console.log(req.helloMessage);
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(404).send({ message: "Task not found" });
    }
    const tasks = JSON.parse(await loadFile("tasks.json"));
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.send(task);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id) || null;
    if (!id) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    const tasks = await JSON.parse(loadFile("tasks.json"));
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }
    tasks.splice(taskIndex, 1);
    await fs.writeFile("tasks.json", JSON.stringify(tasks));
    return res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const tasks = JSON.parse(await loadFile("tasks.json"));
    const newTask = {
      id: generateUniqueId(tasks, tasksNextId),
      title,
      description,
      start_date,
      end_date,
      user_id: user_id || null,
      parent_id: parent_id || null,
      assignee_id: assignee_id || null,
      status,
    };
    tasks.push(newTask);
    await writeToFile("tasks.json", tasks);
    res.status(201).json(newTask);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
