-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: lapuntual_db
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `subcategoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES (1,'Dekton','img/dekton/orix.jpg','Orix','Industriales'),(2,'Dekton','img/dekton/trilium.jpg','Trilium','Industriales'),(3,'Dekton','img/dekton/Grupo 0/vgha.jpg','Vegha','Grupo 0'),(4,'Dekton','img/dekton/Grupo 0/danae.jpg','Danae','Grupo 0'),(5,'Dekton','img/dekton/Grupo 0/domoos.jpg','Dommos','Grupo 0'),(6,'Dekton','img/dekton/Grupo 0/sirocco.jpg','Sirocco','Grupo 0'),(7,'Dekton','img/dekton/Grupo 0/Sirius.jpg','Sirius','Grupo 0'),(8,'Dekton','img/dekton/Grupo 0/blanco-concrete.jpg','Blanc Concrete','Grupo 0'),(9,'Dekton','img/dekton/Grupo 0/aldem.jpg','Aldem','Grupo 0'),(10,'Dekton','img/dekton/Grupo 1/edora.jpg','Edora','Grupo 1'),(11,'Dekton','img/dekton/Grupo 1/kadum.jpg','Kadum','Grupo 1'),(12,'Dekton','img/dekton/Grupo 1/kelya.jpg','Kelya','Grupo 1'),(13,'Dekton','img/dekton/Grupo 1/keon.jpg','Keon','Grupo 1'),(14,'Dekton','img/dekton/Grupo 1/keranium.jpg','Keranium','Grupo 1'),(15,'Dekton','img/dekton/Grupo 1/korus.jpg','Korus','Grupo 1'),(16,'Dekton','img/dekton/Grupo 1/ventus.jpg','Ventus','Grupo 1'),(17,'Dekton','img/dekton/Grupo 2/nillium.jpg','Nillium','Grupo 2'),(18,'Dekton','img/dekton/Grupo 2/orix.jpg','Orix','Grupo 2'),(19,'Dekton','img/dekton/Grupo 2/radium.jpg','Radium','Grupo 2'),(20,'Dekton','img/dekton/Grupo 2/trilium.jpg','Trilium','Grupo 2'),(21,'Dekton','img/dekton/Grupo 2/valterra.jpg','Valterra','Grupo 2'),(22,'Dekton','img/dekton/Grupo 2/zenith.jpg','Zenith','Grupo 2'),(23,'Dekton','img/dekton/Grupo 3/aura.jpg','Aura','Grupo 3'),(24,'Dekton','img/dekton/Grupo 3/entzo.jpg','Entzo','Grupo 3'),(25,'Dekton','img/dekton/Grupo 3/halo.jpg','Halo','Grupo 3'),(26,'Dekton','img/dekton/Grupo 3/kairos.jpg','Kairos','Grupo 3'),(27,'Dekton','img/dekton/Grupo 3/opera.jpg','Opera','Grupo 3'),(28,'Dekton','img/dekton/Grupo 4/glacier.jpg','Glacier','Grupo 4'),(29,'Dekton','img/dekton/Grupo 4/lumina.jpg','Lumina','Grupo 4'),(30,'Dekton','img/dekton/Grupo 4/natura.jpg','Natura','Grupo 4'),(31,'Dekton','img/dekton/Grupo 4/spectra.jpg','Spectra','Grupo 4'),(32,'Dekton','img/dekton/Grupo 4/splendor.jpg','Splendor','Grupo 4'),(33,'Dekton','img/dekton/Grupo 4/tundra.jpg','Tundra','Grupo 4');
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-13 13:50:33
