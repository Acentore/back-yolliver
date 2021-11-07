const { db } = require('../database/config')
const users = db.collection("users");

async function isAdmin(req, res, next) {
  const { email } = req.headers;
  const snapshot = await users.get();
  const user = snapshot.docs.find((u) => u.id === email);

  if (!user) {
    return res.status(400).json({ error: "Usuario não encontrado!" });
  } else if (user.data().admin !== true) {
    return res.status(400).json({ error: "Usuario não é admin!" });
  }
  req.user = user.data();
  return next();
}

module.exports = isAdmin