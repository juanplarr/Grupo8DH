const path = require("path");
const fs = require("fs");
const multer = require("multer");
const db = require("../database/models");
const Producto = db.Producto;

module.exports = {
  index: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("home", { productosL });
    } catch (error) {
      console.log(error);
    }
  },

  aritos: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("categorias/aritos", { productosL });
    } catch (error) {
      console.log(error);
    }
  },

  bandoleras: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("categorias/bandoleras", { productosL });
    } catch (error) {
      console.log(error);
    }
  },

  carteras: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("categorias/carteras", { productosL });
    } catch (error) {
      console.log(error);
    }
  },

  cinturones: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("categorias/cinturones", { productosL });
    } catch (error) {
      console.log(error);
    }
  },

  colgantes: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("categorias/colgantes", { productosL });
    } catch (error) {
      console.log(error);
    }
  },

  gorras: async (req, res) => {
    try {
      let productosL = await Producto.findAll();
      res.render("categorias/gorras", { productosL });
    } catch (error) {
      console.log(error);
    }
  }
};
