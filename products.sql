-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para products
DROP DATABASE IF EXISTS `products`;
CREATE DATABASE IF NOT EXISTS `products` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `products`;

-- Volcando estructura para tabla products.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mark` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `date_release` date DEFAULT NULL,
  `stores` json DEFAULT NULL,
  `img` text,
  `price` float DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla products.products: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `mark`, `model`, `date_release`, `stores`, `img`, `price`, `createdAt`, `updatedAt`) VALUES
	(4, 'Adidas New', 'Ronaldo', '2022-08-19', '"Amazon, Ebay"', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gitEr8AuRi42DVoMHaCZdrIp-07dGHpYML4Jl7I1nA&s', NULL, '2022-08-08', '2022-08-08'),
	(5, 'Nike', '69', '2022-08-27', '"Amazon, Nike"', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/15b48a73-ba71-4bd7-ba13-408d1d8de2ad/calzado-air-force-1-07-mid-G55dnX.png', NULL, '2022-08-08', '2022-08-08'),
	(6, 'Paseo', 'Test', '2022-08-30', '"ML"', 'https://http2.mlstatic.com/D_NQ_NP_709564-MLV50140536212_052022-O.webp', NULL, '2022-08-08', '2022-08-08');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
