# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-26 16:49:06
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "cart"
#

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `product_id` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `product_img` varchar(30) NOT NULL,
  `product_price` varchar(30) NOT NULL,
  `product_num` varchar(30) NOT NULL,
  `submission_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "cart"
#

/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('10','vivo Y70s 5G版 4500mAh+双引擎闪充','../images/boutique-phone04.jpg','2098','2','2020-08-26 15:35:09'),('6','vivoX505G版 超感光夜摄|超稳运动拍摄','../images/hot02.jpg','3498','3','2020-08-26 15:34:44'),('9','vivo S65G版 前后置超级视频防抖','../images/boutique-phone03.jpg','2498','2','2020-08-26 15:34:29');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

#
# Structure for table "product"
#

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `product_img` varchar(30) NOT NULL,
  `product_price` varchar(30) NOT NULL,
  `product_num` varchar(30) NOT NULL,
  `submission_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "product"
#

/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('1','vivo X30Pro 5G版8GB+128GB','../images/rush01.jpg','3698','0','2020-08-26 11:01:13'),('2','NEX3/3s3D曲面保护膜','../images/rush02.jpg','39','1','2020-08-26 14:14:21'),('3','iQOO Neo 原装保护膜','../images/rush03.jpg','14','0','2020-08-26 11:02:04'),('4','Z5星尘彩色保护壳夏日蓝','../images/rush04.jpg','9','0','2020-08-26 11:02:07'),('5','iQO0 Neo3 8GB+128GB/144Hz高刷竞速屏','../images/hot01.jpg','2998','0','2020-08-26 11:02:11'),('6','vivoX505G版 超感光夜摄|超稳运动拍摄','../images/hot02.jpg','3498','0','2020-08-26 11:02:14'),('7','iQO0Z15G版 天现1000Plus旗舰芯片','../images/hot03.jpg','2498','0','2020-08-26 11:02:16'),('8','iQ0035G版 高通骁龙865/双模5G','../images/boutique-phone02.jpg','3498','0','2020-08-26 11:02:18'),('9','vivo S65G版 前后置超级视频防抖','../images/boutique-phone03.jpg','2498','0','2020-08-26 11:02:22'),('10','vivo Y70s 5G版 4500mAh+双引擎闪充','../images/boutique-phone04.jpg','2098','0','2020-08-26 11:01:17'),('11','vivo X27 Pro 升降式摄像头/全面屏','../images/boutique-phone05.jpg','3298','0','2020-08-26 11:01:22'),('12','NEX3S5G版 8GB+256GB/高通骁龙865','../images/boutique-phone06.jpg','4998','0','2020-08-26 11:01:25'),('13','vivoX305G版 双模5G全网通/20倍变焦','../images/boutique-phone07.jpg','2998','0','2020-08-26 11:01:28'),('14','vivo 缤纷耳机 专业调音三频均衡\r\nvivo 缤纷耳机','../images/accessories01.jpg','49','0','2020-08-26 11:01:32'),('15','iQO0 影音耳机 K歌级麦克风','../images/accessories02.jpg','129','0','2020-08-26 11:01:35'),('16','vivo X50 硅胶保护壳 ','../images/accessories03.jpg','59','0','2020-08-26 11:01:38'),('17','iQ003 砂岩手机保护壳','../images/accessories04.jpg','59','0','2020-08-26 11:01:45'),('18','iQOO 闪电游戏手柄','../images/accessories05.jpg','199','0','2020-08-26 11:01:50'),('19','闪充手游数据线','../images/accessories06.jpg','59','0','2020-08-26 11:01:53'),('20','vivo TWS Neo 真无线耳机','../images/accessories07.jpg','499','0','2020-08-26 11:01:58'),('21','vivo 44W 闪充充电器','../images/accessories08.jpg','119','0','2020-08-26 11:02:01');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
