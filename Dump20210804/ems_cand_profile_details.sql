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
-- Table structure for table `cand_profile_details`
--

DROP TABLE IF EXISTS `cand_profile_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_profile_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(450) DEFAULT NULL,
  `name` varchar(900) DEFAULT NULL,
  `initial` varchar(900) DEFAULT NULL,
  `initial_expansion` varchar(900) DEFAULT NULL,
  `type_of_allotment` varchar(450) DEFAULT NULL,
  `father_name` varchar(900) DEFAULT NULL,
  `mother_name` varchar(900) DEFAULT NULL,
  `date_of_birth` varchar(900) DEFAULT NULL,
  `gender` varchar(450) DEFAULT NULL,
  `blood_group` varchar(450) DEFAULT NULL,
  `religion` varchar(450) DEFAULT NULL,
  `community` varchar(450) DEFAULT NULL,
  `caste` varchar(450) DEFAULT NULL,
  `nationality` varchar(450) DEFAULT NULL,
  `willing_to_donate_blood` varchar(450) DEFAULT NULL,
  `academic_year` varchar(450) DEFAULT NULL,
  `student_code` varchar(450) DEFAULT NULL,
  `registered_time` varchar(450) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_profile_details`
--

LOCK TABLES `cand_profile_details` WRITE;
/*!40000 ALTER TABLE `cand_profile_details` DISABLE KEYS */;
INSERT INTO `cand_profile_details` VALUES (96,'devi344125','devikavya','P','Paramasivan','undefined','paramasivan','maha','2021-07-08','Female','O+','Hindu','Scheduled Castes','VEG Pillaimar','Indian','Yes','2019-2020','12333','08/03/2021 16:16:17','08/03/2021 16:16:17'),(97,'ravi969702','ravi','','','undefined','','','','Female',' ',' ',' ','',' ',' ','','','08/03/2021 12:35:43','08/03/2021 12:35:43'),(98,'maha242376','maha','','','undefined','','','','undefined',' ',' ',' ','',' ',' ','','','08/03/2021 15:46:51','08/03/2021 15:46:51');
/*!40000 ALTER TABLE `cand_profile_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 14:09:09
