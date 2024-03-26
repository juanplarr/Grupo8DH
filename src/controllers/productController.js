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

  getAlls: async (req, res) => {
    let allProducts = await Producto.findAndCountAll({
      attributes: ['id', 'nombre', 'precio', 'precioMay','detalle', 'stock', 'categoriaId']
    });
    let countByCategory = {};
    allProducts.rows.forEach(product => {
        if (countByCategory[product.categoriaId]) {
            countByCategory[product.categoriaId]++;
        } else {
            countByCategory[product.categoriaId] = 1;
        }
    });
    const response = {
        allProducts: allProducts,
        countByCategory: countByCategory
    };
    return res.json(response);
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

  edit: async (req, res) => {
    let categoriaL = await Categoria.findAll();
    try {
      const id = req.params.id;
      const productoEditar = await Producto.findByPk(id); // Buscar el producto por su clave primaria
      if (!productoEditar) {
        return res.status(404).send("Producto no encontrado"); // Si no se encuentra el producto, devolver un error 404
      }
      res.render("products/prodEdit.ejs", { productoEditar, categoriaL });
    } catch (error) {
      console.error("Error al editar el producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      // Actualizar los campos del producto con los valores proporcionados en req.body
      await Producto.update({
        nombre: req.body.nombre,
        precio: req.body.precio,
        detalle: req.body.detalle,
        precioCompra: req.body.precioCompra,
        stock: req.body.stock,
        urlImagen: req.body.urlImagen,
        estado: req.body.estado,
        precioMay: req.body.precioMay,
        categoriaId: req.body.categoriaId
      }, {
        where: {
          id: id
        }
      });

      res.redirect('/product'); // Redirigir a la página de productos después de la actualización
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  delete: async (req, res) => {
    try {
      const productId = req.params.id;

      const productoDel = await Producto.findByPk(productId);

      if (!productoDel) {
        return res.status(404).send("Producto no encontrado");
      }

      res.render("products/prodDelete.ejs", { productoDel });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  }
  ,
  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      await db.Producto.destroy({
        where: {
          id: id
        }
      });

      res.redirect("/product");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  }
};
