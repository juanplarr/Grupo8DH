const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req, res) => {
        let productosL = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        res.render(path.resolve(__dirname, '../views/home.ejs'), { productosL });
    }
}
