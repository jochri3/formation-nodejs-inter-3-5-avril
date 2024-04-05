function setupGracefulShutdown(server) {
  process.on("SIGINT", async () => {});

  process.on("SIGTERM", async () => {});
}
