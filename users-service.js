function getUsers() {
  return ["chris", "jean", "alain"];
}

function getUserById(id) {
  return { id: id, fname: "Chris", lname: "John" };
}

// module.exports = getUsers;
// module.exports = getUserById;

// console.log(module);
module.exports = {
  getUserById,
  getUsers,
};
