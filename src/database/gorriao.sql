-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: gorriao
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gorriao;

-- Seleccionar la base de datos
USE gorriao;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `id_carrito` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_carrito`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(45) NOT NULL,
  `estado_categoria` tinyint NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'GORRAS',1),(2,'ARITOS',1),(3,'CINTURONES',1),(4,'COLLARES',1),(5,'BANDOLERAS',1),(6,'CARTERAS',1);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(50) NOT NULL,
  `precio_un_producto` float NOT NULL DEFAULT '1000',
  `detalle_producto` varchar(200) DEFAULT NULL,
  `precio_compra_producto` float DEFAULT NULL,
  `stock_producto` int NOT NULL,
  `url_imagen_producto` varchar(50) NOT NULL,
  `estado_producto` tinyint NOT NULL,
  `precio_may_producto` int NOT NULL DEFAULT '500',
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `producto_FK_categoria_idx` (`categoria_id`),
  CONSTRAINT `producto_FK_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'COLLAR MINIMALISTIC',12000,'Collar minimalista de acero inoxidable',6000,10,'1704917379561_img.jpg',1,9000,4),(2,'COLLAR DIVA',30000,'Collar de plata',20000,10,'1707418528086_img.jpg',1,25000,4),(3,'COLLAR BOTÁNICO',40000,'Collar de plata con detalles botánicos ',30000,10,'1707418569437_img.jpg',1,35000,4),(4,'CINTURON CUERO INDUSTRIAL',25200,'Cinturon de cuero industrial',18000,10,'1704917430494_img.jpg',1,21000,3),(5,'CINTURON CLASICO DE CUERO',35000,'Cinturon clasico para hombre',25000,10,'1707418422686_img.jpg',1,30000,3),(6,'CINTURON OVALO',30000,'Cinturon de cuero de hebilla ovalo',20000,10,'1707418452593_img.jpg',1,25000,3),(7,'ARO ALBA',26000,'Aros recubiertos en oro para dama',16000,10,'1704917737565_img.jpg',1,20000,2),(8,'PACK AROS SUNRISE',38000,'Pack de aros dorados',25000,10,'1704917796812_img.jpg',1,32000,2),(9,'AROS AMERICA',35000,'Aros de oro',28000,10,'1707418919119_img.jpg',1,32000,2),(10,'GORRA YVS',25000,'Gorra rosa y celeste',17000,10,'1707418739354_img.jpg',1,21000,1),(11,'GORRA TADE',25000,'Gorra azul con bordado blanco',17000,10,'1707418762575_img.jpg',1,21000,1),(12,'GORRA FRAN',25500,'Gorra verde y morada',18000,10,'1707418802874_img.jpg',1,23000,1),(13,'CARTERA NOIR',67000,'Cartera de cuero negra',58000,10,'1707419102088_img.jpg',1,64000,6),(14,'CARTERA ONIX',60000,'Cartera de cuero negra',50000,10,'1707419140682_img.jpg',1,55000,6),(15,'CARTERA CARGO',58000,'Cartera de cuero marron',45000,10,'1707419166473_img.jpg',1,50000,6);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_carrito`
--

DROP TABLE IF EXISTS `productos_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_carrito` (
  `id_producto_carrito` int NOT NULL AUTO_INCREMENT,
  `id_carrito` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_producto_carrito`),
  KEY `id_carrito` (`id_carrito`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `productos_carrito_ibfk_1` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`),
  CONSTRAINT `productos_carrito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_carrito`
--

LOCK TABLES `productos_carrito` WRITE;
/*!40000 ALTER TABLE `productos_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(45) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Minorista'),(3,'Mayorista');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(45) NOT NULL,
  `email_usuario` varchar(45) NOT NULL,
  `dni_usuario` int NOT NULL,
  `contrasena_usuario` varchar(16) NOT NULL,
  `apellido_usuario` varchar(45) NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan','juanlarrea@gmail.com',34234672,'Ju1234','Larrea',1),(2,'Rodrigo','rodrigobeltran@gmail.com',37896543,'Rodri1234','Beltran',2),(3,'Milagros','milagrosconcha@gmail.com',45324564,'Mili1234','Concha',3);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gorriao'
--

--
-- Dumping routines for database 'gorriao'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-29 15:58:05
