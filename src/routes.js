const express = require("express");
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");
const SaleController = require("./controllers/SaleController");
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('<h1>Olá mundo</h1>')
})
routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.post("/login", UserController.login);
routes.put("/users/:id", UserController.update)
routes.delete("/users/:id", UserController.delete)

routes.get("/products", ProductController.index);
routes.post("/product", ProductController.create);
routes.put("/product/:id", ProductController.update)
routes.delete("/product/:id", ProductController.delete)

routes.get("/sales", SaleController.index);
routes.post("/sale", SaleController.create);
routes.delete("/sale/:id", SaleController.delete)


module.exports = routes;
