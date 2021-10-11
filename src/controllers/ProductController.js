const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query

    const [count] = await connection("product").count()
    console.log(count);

    const products = await connection("product")
      .limit(5)
      .offset((page - 1) * 5)
      .select("*");

    res.header('X-Total-Count', count['count(*)'])

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