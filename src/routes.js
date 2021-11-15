const express = require("express");
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");
const routes = express.Router();
const isAdmin = require("./middlewares/isAdmin");

routes.get("/", (req, res) => {
  res.send("<h1>Olá mundo</h1>");
});
routes.get("/users", isAdmin, UserController.index);
routes.post("/users", UserController.create);
routes.post("/login", UserController.login);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", isAdmin, UserController.delete);

routes.get("/produtos", ProductController.index);
routes.get("/produtos/:id", ProductController.getProductById);
routes.post("/produtos", ProductController.create);
routes.put("/produtos/:id/update", ProductController.update)
routes.delete("/produtos/:id/delete", ProductController.delete)


module.exports = routes;
