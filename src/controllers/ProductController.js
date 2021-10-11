const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const products = await connection("product").select("*");

    return res.json(products);
  },

  async create(req, res) {
    const data = req.body

    await connection("product").insert(data);
    return res.json({});
  },

  async delete(req, res) {
    const { id } = req.params

    await connection("product")
      .where("id", id)
      .delete()

    return res.status(204).send();
  }
}