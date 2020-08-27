# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-27 20:01:29
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `usernum` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'zhangsan','666'),(2,'lisi','333'),(3,'123','666'),(4,'13296763670','666666666'),(5,'hahaha','999'),(6,'520520','521521'),(7,'333','666');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
