const express = require('express');
const productRoutes = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/productos'));
    },
    filename: function (req, file, cb) {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        console.log(fileName);
        cb(null, fileName);
    }
});

const upload = multer({ storage });

//importar el controlador
const productController = require('../controllers/productController');

productRoutes.get('/carrito', productController.carrito);
productRoutes.get('/product', productController.product);
productRoutes.get('/productclient', productController.productclient);
productRoutes.get('/caredit', productController.caredit);
productRoutes.get('/caredit2', productController.caredit2);
//Nuevo -
productRoutes.get('/caredit3', productController.caredit3);
productRoutes.post('/create', upload.single('urlImagen'), productController.create);
//Hasta aqui -
productRoutes.post('/caredit', upload.single('avatar'), productController.save);
productRoutes.get('/products/prodDetail/:id', productController.show);
productRoutes.get('/products/prodEdit/:id', productController.edit);
productRoutes.put('/products/prodEdit/:id', upload.single('avatar'), productController.update);
//productRoutes.get('/products/prodDelete/:id', productController.destroy);
//Nuevo
productRoutes.get('/products/prodDelete/:id', productController.delete);
productRoutes.get('/products/prodDestroy/:id', productController.destroy);

module.exports = productRoutes;