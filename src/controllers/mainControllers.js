const path = require("path");
const fs = require("fs");

const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    try {
      let productos = await db.Producto.findAll({ include: ["Categoria"] });
      //return res.json(productos);
      console.log("Productos", productos);

      /* let productosL = await db.Producto.findAll() */

      let productosL = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
      );
      // res.render(path.resolve(__dirname, "../views/home.ejs"), { productosL });
      res.render("home.ejs", { productosL }); //al configurar la ubicacion de views, no hace falta pasarle la ruta absoluta al ejs
    } catch (error) {
      console.log(error);
    }
  },
};
