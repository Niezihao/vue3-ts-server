/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : vue_ts-database

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2023-08-21 11:20:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dicts
-- ----------------------------
DROP TABLE IF EXISTS `dicts`;
CREATE TABLE `dicts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dict_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '字典名称',
  `dict_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '字典code',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '描述',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
  `create_by` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '创建人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of dicts
-- ----------------------------
INSERT INTO `dicts` VALUES ('1', 'as', 'code', 'Aasdasd', '1', 'test3', null, '2023-08-18 11:34:40');
INSERT INTO `dicts` VALUES ('2', 'asassd', 'sdfsdf', 'sdfsdfdsf', '1', 'test3', null, '2023-08-18 11:55:08');
INSERT INTO `dicts` VALUES ('3', '状态', 'status', '状态', '1', 'test3', null, '2023-08-18 11:34:40');

-- ----------------------------
-- Table structure for dict_items
-- ----------------------------
DROP TABLE IF EXISTS `dict_items`;
CREATE TABLE `dict_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dict_id` int(11) NOT NULL COMMENT '角色ID',
  `item_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '子文本',
  `item_value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '子值',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '描述',
  `sort_order` int(11) NOT NULL COMMENT '排序',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
  `create_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '创建人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of dict_items
-- ----------------------------
INSERT INTO `dict_items` VALUES ('1', '3', '是', '1', '是', '0', '1', 'test3', '2023-08-18 14:25:40', '2023-08-18 12:28:42');
INSERT INTO `dict_items` VALUES ('2', '3', '否', '0', '否', '1', '1', 'test3', null, '2023-08-18 12:29:04');

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `menu_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL COMMENT '上级ID',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `type` char(1) NOT NULL COMMENT '类型',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `name` varchar(255) DEFAULT NULL COMMENT '路由名称',
  `component` varchar(255) DEFAULT NULL COMMENT '路由组件',
  `path` varchar(255) DEFAULT NULL COMMENT '路由地址',
  `redirect` varchar(255) DEFAULT NULL COMMENT '跳转地址',
  `permission` varchar(255) DEFAULT NULL COMMENT '权限标识',
  `hidden` tinyint(1) DEFAULT NULL COMMENT '隐藏',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of menus
-- ----------------------------
INSERT INTO `menus` VALUES ('1', '0', '系统管理', '0', 'M', 'component', 'System', 'Layout', '/system', '/system/user', null, '0', null, '2023-07-27 15:49:03');
INSERT INTO `menus` VALUES ('2', '1', '用户管理', '1', 'M', 'user', 'User', '/system/user', '/system/user', null, null, '0', '2023-08-17 15:20:25', '2023-07-28 10:58:17');
INSERT INTO `menus` VALUES ('3', '1', '角色管理', '2', 'M', 'peoples', 'Role', '/system/role', '/system/role', '', null, '0', '2023-08-17 15:20:40', '2023-08-17 09:26:53');
INSERT INTO `menus` VALUES ('4', '1', '菜单管理', '3', 'M', 'documentation', 'Menu', '/system/menu', '/system/menu', '', null, '0', '2023-08-17 15:21:09', '2023-08-17 09:27:45');
INSERT INTO `menus` VALUES ('5', '1', '数据字典', '4', 'M', 'build', 'Dict', '/system/dict', '/system/dict', '', null, '0', '2023-08-17 15:21:19', '2023-08-17 09:28:30');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '角色名称',
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '备注',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', '管理员', '管理员权限', '1', null, '2023-07-27 11:38:01');
INSERT INTO `roles` VALUES ('2', '成员', '成员权限', '1', null, '2023-07-27 11:43:48');
INSERT INTO `roles` VALUES ('4', '成员', '成员权限', '1', null, '2023-07-27 11:43:51');

-- ----------------------------
-- Table structure for roles_menus
-- ----------------------------
DROP TABLE IF EXISTS `roles_menus`;
CREATE TABLE `roles_menus` (
  `role_menu_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '角色菜单联合表id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`role_menu_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of roles_menus
-- ----------------------------
INSERT INTO `roles_menus` VALUES ('1', '2', '1', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('2', '2', '2', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('3', '2', '3', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('4', '2', '4', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('5', '1', '1', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('6', '1', '2', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('7', '1', '3', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('8', '1', '4', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('9', '1', '5', '2023-07-31 14:39:09');
INSERT INTO `roles_menus` VALUES ('10', '2', '24', '2023-07-31 14:39:09');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id唯一字段',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  `nickname` varchar(255) DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(255) DEFAULT NULL COMMENT '用户邮箱\r\n',
  `user_pic` text COMMENT '用户头像',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '用户状态： 0为停用、1启用\r\n',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2', 'nie1', '$2a$10$dFpNxhnPjonvk4O343u6c.a3d/hw21kFkoVdDsC2W1cdwUAcgrOpm', null, null, 'public\\avatar\\range_time_2.svg', '1', '2023-07-17 17:16:19', null);
INSERT INTO `users` VALUES ('4', 'test1', '$2a$10$6cxvP.xamHucPJJzH3O07eSkps00PkIAWM2quG13aCCnAK27G59PS', null, null, null, '1', '2023-07-27 12:02:39', null);
INSERT INTO `users` VALUES ('5', 'test3', '$2a$10$.gjjAK1rcEYGUE9NRVSxn.apzNYl6fZIhLXIfT7vhfcqLMqOCmCpW', null, null, null, '1', '2023-07-27 12:02:47', null);
INSERT INTO `users` VALUES ('6', 'test4', '$2a$10$Jl0CTGZv2uYQC/ixlFzQ0.1tlmAL45KCjN.SW1uRCRSPe29JPX9Ai', null, null, null, '1', '2023-07-27 12:02:53', null);
INSERT INTO `users` VALUES ('7', 'test6', '$2a$10$xvI9axEc5wInoB81kY8a/uoDYUnrAmqnWe26vm0Q5oi5nUsewk.O6', null, null, null, '1', '2023-07-27 12:13:21', null);
INSERT INTO `users` VALUES ('8', 'test2', '$2a$10$fgTmY9XeEQ3z1hXtqZWzXubRfufweXLE3zneM80UHWE7nJ0al5uvm', null, null, null, '1', '2023-08-17 09:59:58', null);

-- ----------------------------
-- Table structure for users_roles
-- ----------------------------
DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles` (
  `user_role_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`user_role_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of users_roles
-- ----------------------------
INSERT INTO `users_roles` VALUES ('2', '2', '4', '2023-07-27 12:02:39');
INSERT INTO `users_roles` VALUES ('3', '1', '5', '2023-07-27 12:02:47');
INSERT INTO `users_roles` VALUES ('4', '4', '6', '2023-07-27 12:02:53');
INSERT INTO `users_roles` VALUES ('5', '1', '8', '2023-08-17 09:59:58');
