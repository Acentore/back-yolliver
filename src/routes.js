const express = require("express");
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");
const StockController = require("./controllers/StockController");
const routes = express.Router();
const isAdmin = require('./middlewares/isAdmin')

routes.get('/', (req, res) => {
  res.send('<h1>Olá mundo</h1>')
})
routes.get("/users", isAdmin, UserController.index);
routes.post("/users", UserController.create);
routes.post("/login", UserController.login);
routes.put("/users/:id", UserController.update)
routes.delete("/users/:id", isAdmin, UserController.delete)

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.getProductById);
routes.post("/products", ProductController.create);
routes.put("/products/:id", isAdmin, ProductController.update)
routes.delete("/products/:id", isAdmin, ProductController.delete)

routes.get("/stock", StockController.index);
routes.get("/stock/amount/:id", StockController.getAmountByProductId);
routes.post("/stock", StockController.create);
routes.put("/stock/:id", isAdmin, StockController.update)
routes.delete("/stock/:id", isAdmin, StockController.delete)


module.exports = routes;
