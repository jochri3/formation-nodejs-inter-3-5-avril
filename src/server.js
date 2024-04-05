const app = require("./app");
const connectToDatabase = require("./utils/connection-to-database");

const port = 3000;

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log("Error during server startup...");
    process.exit(1);
  }
}

startServer();
