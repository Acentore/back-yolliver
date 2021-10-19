const { db } = require('../database/config')
const product = db.collection("products");

module.exports = {
  async index(req, res) {
    const snapshot = await product.get();
    const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(products);
  },
  async create(req, res) {
    const data = req.body
    await product.add(data)
    res.send({ status: 200, msg: "product created" })
  },
  async update(req, res) {
    const { id, ...data } = req.body
    await product.doc(id).update(data)
    res.send({ status: 200, msg: "product updated" })
  },
  async delete(req, res) {
    const { id } = req.body
    await product.doc(id).delete()
    res.send({ msg: "product deleted" })
  }
};
