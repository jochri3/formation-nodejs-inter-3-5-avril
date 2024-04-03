// Sans destructuration
// const usersService = require("./users-service");//{}

// console.log(usersService.getUserById(1));
// console.log(usersService.getUsers());

// Avec destructuration
const { getUsers, getUserById } = require("./users-service");
console.log(getUsers());
console.log(getUserById(1));
