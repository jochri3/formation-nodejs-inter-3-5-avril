function generateUniqueId(data, nextId) {
  if (data.length === 0) {
    return nextId;
  }

  const maxId = Math.max(...data.map((item) => item.id));
  nextId = Math.max(nextId, maxId + 1);
  return nextId;
}

module.exports = { generateUniqueId };
