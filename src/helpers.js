function sortByOrder(items) {
  return items.sort((a, b) => b.order - a.order)
}

module.exports = { sortByOrder }
