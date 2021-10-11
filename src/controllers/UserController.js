const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const users = await connection("users").select("*");
 
    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password, whatsapp, city, uf } = req.body;
    await connection("users").insert({
      name,
      email,
      password,
      whatsapp,
      city,
      uf
    });

    return res.json({ name });
  }
};
