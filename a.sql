const DictItemModel = sequelize.define('dict_items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dict_id: {
    type: Sequelize.INTEGER
  },
  item_text: {
    type: Sequelize.STRING(255)
  },
  item_value: {
    type: Sequelize.STRING(255)
  },
  description: {
    type: Sequelize.STRING(255)
  },
  sort_order: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  status: {
    type: Sequelize.CHAR,
    defaultValue: '1'
  },
  create_by: {
    type: Sequelize.STRING(32)
  },
  update_time: {
    type: Sequelize.DATE,
    get() {
      return this.getDataValue('update_time')
        ? moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss')
        : null;
    }
  },
  create_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
    }
  }
});

-- ----------------------------
-- dict 表的结构
-- ----------------------------
DROP TABLE IF EXISTS `dict`;
CREATE TABLE `dict` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `dict_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '字典名称',
  `dict_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '字典code',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `status` tinyint NOT NULL DEFAULT 1 COMMENT '状态',
  `create_by` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '创建人',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- dict_items 表的结构
-- ----------------------------
DROP TABLE IF EXISTS `dict_items`;
CREATE TABLE `dict_items` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `dict_id` int NOT NULL COMMENT '角色ID',
 `item_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '子文本',
 `item_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '子值',
 `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '描述',
  `sort_order` int NOT NULL COMMENT '排序',
     `status` tinyint NOT NULL DEFAULT 1 COMMENT '状态',
 `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '创建人',

  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
