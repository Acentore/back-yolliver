const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { category } = req.params

    const products = await connection("product")
      .where('category', category)
      .select('*')

    return res.json(products);
  },
}