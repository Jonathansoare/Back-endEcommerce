const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001; 
const host = process.env.HOST;

// Carrega automaticamente o arquivo de ambiente correto com base no ambiente
if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: '.env.production' });
} else {
    require('dotenv').config({ path: '.env.local' });
}

const userRouter = require("./src/routes/UserRouter")
const productsRouter = require("./src/routes/ProductsRouter")
const brandRouter = require("./src/routes/BrandRouter")
const categorieRouter = require("./src/routes/CategorieRouter")
const ShoppingCart = require("./src/routes/ShoppingCart")
const Favorite = require("./src/routes/FavoriteRouter")
const cuponRouter = require("./src/routes/CuponRouter")
const LogsRouter = require("./src/routes/LogRouter")

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

/* controla as rotas de Logs */
app.use(LogsRouter);

app.use("/",(req,res) => {
    res.send("hello word.")
})

const server = app.listen(PORT, () => {
    const address = server.address();
    const host = address.address === '::' ? 'localhost' : address.address;
    const port = address.port;
    console.log(`Aplicação rodando em http://${host}:${port}`);
  });
