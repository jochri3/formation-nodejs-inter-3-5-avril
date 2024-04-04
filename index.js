const axios = require("axios");
const _ = require("lodash");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.message));

console.log(_.includes([1, 2, 3, 4, 5], 2));
