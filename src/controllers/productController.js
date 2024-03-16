const path = require("path");
const fs = require("fs");
const multer = require("multer");
const db = require("../database/models");
const Producto = db.Producto;
const Categoria = db.Categoria;
const ProductoCarrito = db.ProductoCarrito;

module.exports = {
  carrito: (req, res) => {
    res.render(path.resolve(__dirname, "../views/carrito.ejs"));
  },

  product: async (req, res) => {
    try {
      /* let productosL = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
      ); */
      let productosL = await Producto.findAll();

      res.render("product", { productosL });
    } catch (error) {
      console.log(error);
    }
    //res.render(path.resolve(__dirname, '../views/product.ejs'))
  },

  productclient: async (req, res) => {
    try {
      /* let productosL = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
      ); */
      let productosL = await Producto.findAll();
      //console.log(productosL)
      res.render("productclient", { productosL });
    } catch (error) {
      console.log(error);
    }
    //res.render(path.resolve(__dirname, '../views/product.ejs'))
  },

  caredit: async (req, res) => {
    try {
      let categoriaL = await Categoria.findAll();
      //res.render(path.resolve(__dirname, "../views/caredit3.ejs"));
      res.render("caredit", { categoriaL });
    } catch (error) {
      console.log(error);
    }
  },

  create: async (req, res) => {
    let productosL = await Producto.findAll();
    let ultimoElemento = productosL.pop();
    let nuevoId = ultimoElemento ? ultimoElemento.id + 1 : 1;
    try {
      await Producto.create({
        id: nuevoId,
        nombre: req.body.nombre,
        precio: req.body.precio,
        detalle: req.body.detalle,
        precioCompra: req.body.precioCompra,
        stock: req.body.stock,
        urlImagen: req.file.filename,
        estado: req.body.estado,
        precioMay: req.body.precioMay,
        categoriaId: req.body.categoriaId,
      });
      await res.redirect("/product");
    } catch (error) {
      res.send(`Uff, ha ocurrido un error  ${error.message}$`);
    }
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const producto = await Producto.findByPk(id, {
        include: [
          {
            model: Categoria,
            as: "Categoria",
          },
          {
            model: ProductoCarrito, //Les falto crear esa variable (revisar linea 5 y 6)
            as: "ProductosCarrito",
          },
        ],
      });
      console.log(producto);

      if (!producto) {
        return res.status(404).send("Producto no encontrado");
      }

      res.render("products/prodDetail.ejs", {
        miProducto: producto,
      });
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  edit: (req, res) => {
    let productosL = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
    );
    let id = req.params.id;
    let productoEditar = productosL.find((producto) => {
      return producto.id == id;
    });
    res.render(path.resolve(__dirname, "../views/products/prodEdit.ejs"), {
      productoEditar,
    });
  },
  update: [
    //upload.single('avatar'),
    (req, res) => {
      console.log(req.body);
      let productosL = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
      );
      let id = req.params.id;
      req.body.id = id;
      req.body.id = parseInt(req.body.id);

      // Verificar si se cargó un archivo
      if (req.file) {
        //const extension = path.extname(req.file.originalname);
        //req.body.avatar = req.file.filename + extension;
        req.body.avatar = req.file.filename;
      }

      let productosActualizar = productosL.map((producto) => {
        if (producto.id == id) {
          return req.body;
        }
        return producto;
      });

      let productoYaActualizado = JSON.stringify(productosActualizar, null, 2);
      fs.writeFileSync(
        path.resolve(__dirname, "../JSON/productos.json"),
        productoYaActualizado
      );

      res.redirect("/product");
    },
  ],
  delete: function (req, res) {
    let productosL = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
    );
    let productId = req.params.id;
    let productoDel = productosL.find((producto) => producto.id == productId);

    if (!productoDel) {
      return res.status(404).send("Producto no encontrado");
    }
    res.render(path.resolve(__dirname, "../views/products/prodDelete.ejs"), {
      productoDel,
    });
  },
  destroy: (req, res) => {
    let productosL = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../JSON/productos.json"))
    );
    let id = req.params.id;
    let productosFinal = productosL.filter((producto) => producto.id != id);
    let productoGuardarFinal = JSON.stringify(productosFinal, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../JSON/productos.json"),
      productoGuardarFinal
    );
    res.redirect("/product");
  },
};
