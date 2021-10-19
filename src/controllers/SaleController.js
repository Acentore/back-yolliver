const { db } = require('../database/config')
const sale = db.collection("sales");
const product = db.collection("products");

function calcTotal(data) {
  let qtd, value , total = 0

  Array.from(data).forEach(el => {
    qtd += el.quantity
    value += el.value
  })
  total = qtd * value
  return total
}

module.exports = {
  async index(req, res) {
    const snap = await sale.get();
    const sales = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    res.send(sales);
  },
  async create(req, res) {
    const { buyer, products } = req.body

    await sale.add({
      buyer,
      products,
      total: calcTotal(products)
    })
      .then(() => {
        Array.from(products).forEach(el => {
          product.doc(el.id).update({ quantity: el.quantity })
        })
      }).catch(err => console.log(err))

    res.send({ status: 200, msg: "sale created" })
  },
  async delete(req, res) {
    const {id } = req.body
    await sale.doc(id).delete()
    res.send({ msg: "sale deleted" })
  }
};