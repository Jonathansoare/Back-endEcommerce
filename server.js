const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT; 
const host = process.env.HOST;

const userRouter = require("./src/routes/UserRouter")
const productsRouter = require("./src/routes/ProductsRouter")
const brandRouter = require("./src/routes/BrandRouter")
const categorieRouter = require("./src/routes/CategorieRouter")
const ShoppingCart = require("./src/routes/ShoppingCart")
const Favorite = require("./src/routes/FavoriteRouter")
const cuponRouter = require("./src/routes/CuponRouter")

app.use(express.json());
app.use(cors());
require('dotenv').config();

/* controla as rotas de usuario */
app.use(userRouter)

/* controla as rotas de Produtos */
app.use(productsRouter)

/* controla as rotas de marcas */
app.use(brandRouter)

/* controla as rotas de categorias */
app.use(categorieRouter)

/* controla as rotas de carrinho de compras */
app.use(ShoppingCart)

/* controla as rotas de favoritos */
app.use(Favorite);

/* controla as rotas de cupons */
app.use(cuponRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
