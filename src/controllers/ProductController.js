const { firebase } = require("../database/config");
const { v4: uuid } = require("uuid");
const db = firebase.database();
const produtosRef = (ref) => db.ref(ref);

module.exports = {
  async index(req, res) {
    const pro = [];
    await produtosRef("produtos")
      .orderByChild("name")
      .on("value", function (snapshot) {
        snapshot.forEach(function (item) {
          pro.push(item.val());
        });
      });
    res.status(200).json(pro);
  },
  async getProductById(req, res) {
    const { id } = req.params;
    const pro = await produtosRef(`produtos/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(200).json(pro);
  },
  async create(req, res) {
    const data = req.body;
    const id = uuid();
    try {
      produtosRef(`produtos/${id}`).set({ id, ...data });
      res.send();
    } catch (error) {
      console.error(error);
    }
  },
  async update(req, res) {
    const data = req.body;
    const { id } = req.params;
    produtosRef(`produtos/${id}`).update(data);
    res.send();
  },
  async delete(req, res) {
    const { id } = req.params;
    produtosRef(`produtos/${id}`).remove();
    res.send();
  },
};
