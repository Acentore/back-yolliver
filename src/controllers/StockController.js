const { db } = require("../database/config");
const stock = db.collection("stock");

module.exports = {
  async index(req, res) {
    const snapshot = await stock.get();
    const stocksItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(stocksItems);
  },
  async getAmountByProductId(req, res) {
    const { id } = req.params;
    await stock
      .where("id", "==", id).get()
      .then(query => query.forEach((doc) =>  res.json(doc.data().amount)))
      .catch((error) => { console.log("Error getting documents: ", error) })
  },
  async create(req, res) {
    const data = req.body;
    await stock.add(data);
    res.json({ status: 201, msg: "stock created" });
  },
  async update(req, res) {
    const { id } = req.params;
    const { ...data } = req.body;
    await stock.doc(id).update(data);
    res.json({ status: 200, msg: "stock updated" });
  },
  async delete(req, res) {
    const { id } = req.params;
    await stock.doc(id).delete();
    res.json({ msg: "stock deleted" });
  },
};
