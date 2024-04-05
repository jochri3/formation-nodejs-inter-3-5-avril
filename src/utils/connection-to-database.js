const prisma = require("../db");
const asyncRetry = require("async-retry");

async function connectToDatabase() {
  await asyncRetry(
    async () => {
      await prisma.$connect();
    },
    {
      retries: 5,
      onRetry: (err, attempt) => {
        console.log(`Retry attemp ${attempt} - ${err.message} `);
      },
    }
  );
}

module.exports = connectToDatabase;
