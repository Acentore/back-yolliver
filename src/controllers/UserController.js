const { db, firebase } = require('../database/config')
const user = db.collection("users");

module.exports = {
  async index(req, res) {
    const snapshot = await user.get();
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  },
  async create(req, res) {
    const { email, password, ...data } = req.body
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        user.add({ email: email, ...data })
        res.json({ status: 200, msg: "user created"})
      })
      .catch((error) => {
        res.json({ status: 400, msg: error.message})
      })
  },
  async login(req, res) {
    const { email, password } = req.body
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        res.json({ status: 200, msg: "Login success"})
      })
      .catch((error) => {
        res.json({ status: 400, msg: error.message})
      });
  },
  async update(req, res) {
    const { id, ...data } = req.body
    await user.doc(id).update(data)
    res.json({ msg: "user updated" })
  },
  async delete(req, res) {
    const { id } = req.body
    await user.doc(id).delete()
    res.json({ msg: "user deleted" })
  }
};
