const path = require("path");
const fs = require("fs");
const bccrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const multer = require("multer");
const upload = multer({ dest: "public/images" });

module.exports = {
  register: (req, res) => {
    res.render(path.resolve(__dirname, "../views/register.ejs"));
  },
  create: (req, res) => {
    let archivoUsuarios = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../JSON/usuarios.json"))
    );
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let usuarioNew = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        email: req.body.email,
        password: bccrypt.hashSync(req.body.password, 10),
        avatar: req.file.filename,
        role: 1,
      };
      archivoUsuarios.push(usuarioNew);
      const nuevoUsuarioGuardar = JSON.stringify(archivoUsuarios, null, 2);

      fs.writeFileSync(
        path.resolve(__dirname, "../JSON/usuarios.json"),
        nuevoUsuarioGuardar
      );
      return res.redirect("/login");
    }

    return res.render(path.resolve(__dirname, "../views/register.ejs"), {
      errors: errors.errors,
      old: req.body,
    });
  },
  login: (req, res) => {
    res.render(path.resolve(__dirname, "../views/login.ejs"));
  },
  ingresar: (req, res) => {
    let archivoUsuarios = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../JSON/usuarios.json"))
    );
    let usuarioLogin = archivoUsuarios.find(
      (user) => user.email.toUpperCase() == req.body.email.toUpperCase()
    );
    //console.log(req.body.password);
    //console.log(usuarioLogin);
    if (
      usuarioLogin &&
      bccrypt.compareSync(req.body.password, usuarioLogin.password)
    ) {
      req.session.usuarioLogueado = usuarioLogin;

      //cookie
      if (req.body.remember != undefined) {
        res.cookie("recordame", usuarioLogin.email, { maxAge: 60000 });
      }
      res.redirect("/");
    } else {
      return res.render(path.resolve(__dirname, "../views/login.ejs"), {
        errors: [
          {
            msg: "Correo y/o contraseña incorrectos.",
          },
        ],
      });
    }
  },
  profile: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/profile.ejs"), {
      usuarios: req.session.usuarioLogueado,
    });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};
