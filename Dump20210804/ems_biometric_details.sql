-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `biometric_details`
--

DROP TABLE IF EXISTS `biometric_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biometric_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(45) DEFAULT NULL,
  `cand_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `Filename` varchar(256) DEFAULT NULL,
  `active_flag` varchar(250) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biometric_details`
--

LOCK TABLES `biometric_details` WRITE;
/*!40000 ALTER TABLE `biometric_details` DISABLE KEYS */;
INSERT INTO `biometric_details` VALUES (142,'devi344125','devikavya','Sign','1626781599795devi2.jpg','Y','07/20/2021 17:16:40'),(143,'devi344125','devikavya','Photo','1626781599784devi1.jpg','Y','07/20/2021 17:16:40'),(144,'devi344125','devikavya','Thumb','1626781599804devi3.jpg','Y','07/20/2021 17:16:40'),(145,'ravi969702','ravi','Photo',NULL,'Y','08/02/2021 10:49:27'),(146,'ravi969702','ravi','Sign',NULL,'Y','08/02/2021 10:49:27'),(147,'ravi969702','ravi','Thumb',NULL,'Y','08/02/2021 10:49:27'),(148,'maha242376','maha','Sign',NULL,'Y','08/03/2021 13:56:11'),(149,'maha242376','maha','Photo',NULL,'Y','08/03/2021 13:56:11'),(150,'maha242376','maha','Thumb',NULL,'Y','08/03/2021 13:56:11');
/*!40000 ALTER TABLE `biometric_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 14:09:10
