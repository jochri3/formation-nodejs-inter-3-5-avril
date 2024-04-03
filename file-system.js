const fs = require("node:fs/promises");

// Lire
// fs.readFile("verbe.tx", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// (async () => {
//   try {
//     const file = await fs.readFile("verbe.txt", "utf-8");
//     console.log(file);
//   } catch (err) {
//     console.log(err.message);
//   }
// })();

// Ecrire et ecraser
// const content = "Maman j'ai raté l'avion.";
// fs.writeFile("./verbe2.txt", content)
//   .then(() => console.log("Success"))
//   .catch((err) => console.log(err.message));

// Ecrire et ajouter
const players = [
  "Zinedine Zidane",
  "Thierry Heny",
  "David Trezeguet",
  "Laurent Blanc",
  "Robert Pires",
];

for (const player of players) {
  fs.appendFile("./france-wc-1998.txt", `\n${player}`)
    .then(() => console.log("Success"))
    .catch((err) => console.log(err.message));
}
