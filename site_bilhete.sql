-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: site
-- ------------------------------------------------------
-- Server version	8.0.41

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

--
-- Table structure for table `bilhete`
--

DROP TABLE IF EXISTS `bilhete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bilhete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(20) NOT NULL,
  `jogo` varchar(100) NOT NULL,
  `quantidade` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `metodo_pagamento` varchar(50) NOT NULL,
  `data_compra` datetime NOT NULL,
  `Buyer` varchar(400) DEFAULT NULL,
  `Email` varchar(400) DEFAULT NULL,
  `data_jogo` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bilhete`
--

LOCK TABLES `bilhete` WRITE;
/*!40000 ALTER TABLE `bilhete` DISABLE KEYS */;
INSERT INTO `bilhete` VALUES (1,'190342','Mocambique X Marrocos - Bilhetes VIP',1,120.00,'Cartao','2025-04-22 19:13:20',NULL,NULL,NULL),(2,'470062','Mocambique X Sudao - Bilhetes Normais',1,80.00,'Cartao','2025-04-22 19:27:35',NULL,NULL,NULL),(3,'864432','Mocambique X Marrocos - Bilhetes VIP',1,120.00,'M-Pesa','2025-06-11 13:04:25','dsda','dsads@s.com','2025-08-20 13:30:00'),(4,'407495','Mocambique X Argelia - Bilhetes Normais',1,50.00,'M-Pesa','2025-06-11 13:43:31','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(5,'442303','Mocambique X Argelia - Bilhetes Normais',1,50.00,'M-Pesa','2025-06-11 13:45:30','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(6,'923213','Mocambique X Argelia - Bilhetes Normais',1,50.00,'M-Pesa','2025-06-11 13:47:59','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(7,'725645','Mocambique X Argelia - Bilhetes Normais',1,50.00,'M-Pesa','2025-06-11 13:50:55','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(8,'685404','Mocambique X Argelia - Bilhetes Normais',1,50.00,'Cartao','2025-06-11 19:10:31','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(9,'794303','Mocambique X Argelia - Bilhetes Normais',1,50.00,'Cartao','2025-06-11 19:16:25','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(10,'467770','Mocambique X Argelia - Bilhetes Normais',1,50.00,'Cartao','2025-06-11 19:17:46','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00'),(11,'856964','Mocambique X Argelia - Bilhetes Normais',1,50.00,'Cartao','2025-06-11 19:18:25','laerson','laersonrui44@gmail.com','2025-10-02 10:30:00');
/*!40000 ALTER TABLE `bilhete` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-02 13:18:08
