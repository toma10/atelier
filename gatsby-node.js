const path = require("path")
const restaurovaniNabytku = require("./src/data/restaurovani-nabytku.json")
const pozlacovaniAPolychromie = require("./src/data/pozlacovani-a-polychromie.json")
const rezbaVolnaTvorba = require("./src/data/rezba-volna-tvorba.json")

const { sortByOrder } = require("./src/helpers")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const beforeAfterTemplate = path.resolve("./src/templates/before-after.js")
  const simpleTemplate = path.resolve("./src/templates/simple.js")

  sortByOrder(restaurovaniNabytku.data).forEach((item, index, items) => {
    const path = `/restaurovani-nabytku/${item.id}`

    createPage({
      path,
      component: beforeAfterTemplate,
      context: {
        item,
        title: "Restaurování nábytku",
        prevItemLink: `/restaurovani-nabytku/${getPrevItem(items, index).id}`,
        nextItemLink: `/restaurovani-nabytku/${getNextItem(items, index).id}`,
        returnLink: "/restaurovani-nabytku",
      },
    })
  })

  sortByOrder(pozlacovaniAPolychromie.data).forEach((item, index, items) => {
    const path = `/pozlacovani-a-polychromie/${item.id}`

    createPage({
      path,
      component: beforeAfterTemplate,
      context: {
        item,
        title: "Pozlacování a polychromie",
        prevItemLink: `/pozlacovani-a-polychromie/${
          getPrevItem(items, index).id
        }`,
        nextItemLink: `/pozlacovani-a-polychromie/${
          getNextItem(items, index).id
        }`,
        returnLink: "/pozlacovani-a-polychromie",
      },
    })
  })

  sortByOrder(rezbaVolnaTvorba.data).forEach((item, index, items) => {
    const path = `/rezba-volna-tvorba/${item.id}`

    createPage({
      path,
      component: simpleTemplate,
      context: {
        item,
        title: "Řezba volná tvorba",
        prevItemLink: `/rezba-volna-tvorba/${getPrevItem(items, index).id}`,
        nextItemLink: `/rezba-volna-tvorba/${getNextItem(items, index).id}`,
        returnLink: "/rezba-volna-tvorba",
      },
    })
  })
}

function getPrevItem(items, index) {
  if (index === 0) {
    return items[items.length - 1]
  }

  return items[index - 1]
}

function getNextItem(items, index) {
  if (index === items.length - 1) {
    return items[0]
  }

  return items[index + 1]
}
