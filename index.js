const express = require("express");
const { loadFile, writeToFile } = require("./utils/file.utils");
const { generateUniqueId } = require("./utils/generate-unique-id.util");

let tasksNextId = 1;

const app = express();

app.use(express.json());

// Tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = JSON.parse(await loadFile("tasks.json"));
    res.status(200).json(tasks);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/tasks/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id) || null;
    if (!id) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    const tasks = JSON.parse(await loadFile("tasks.json"));
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(task);
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

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id) || null;
    if (!id) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    const tasks = JSON.parse(await loadFile("tasks.json"));
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }
    tasks.splice(taskIndex, 1);
    await writeToFile("tasks.json", tasks);
    return res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
