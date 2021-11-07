const { db } = require("../database/config");
const product = db.collection("products");
const stock = db.collection("stock");
const {v4: uuid}  = require('uuid')

module.exports = {
  async index(req, res) {
    const snapshot = await product.get();
    const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  },
  async getProductById(req, res) {
    const { id } = req.params;
    await product
      .where("id", "==", id).get()
      .then(query => query.forEach((doc) =>  res.json(doc.data())))
      .catch((error) => { console.log("Error getting documents: ", error) })
  },
  async create(req, res) {
    const { title, price, amount } = req.body;
    const id = uuid()
    await product
      .add({ id, title, price,})
      .then((docRef) => { stock.add({ id, amount })})
      .catch((error) => { console.error("Error adding document: ", error)});
    res.json({ status: 200, msg: "product created" });
  },
  async update(req, res) {
    const { id, ...data } = req.body;
    await product.doc(id).update(data);
    res.json({ status: 200, msg: "product updated" });
  },
  async delete(req, res) {
    const { id } = req.body;
    await product.doc(id).delete();
    res.json({ msg: "product deleted" });
  },
};
