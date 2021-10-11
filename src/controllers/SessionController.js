const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body

    const user = await connection('users')
      .where('email', email)
      .andWhere('password', password)
      .select('name')
      .first()
    if (!user) {
      return res.status(400).json({error: "Email ou senha incorreto"})
    }
    return res.json(user)
  }
}