# 动态考试许可证

这是个小项目，用于给学院基地考核的密码生成系统提供动态界面。

采用了动态海报风格，灵感来源于 [B 站一位大佬的动态海报](https://github.com/d3adrabbit/to-kill-a-rabbit)

时间关系暂时未设计成动态网页，而是引入 **react-app-rewired** 插件后进行 webpack 覆写，并打包成单独的 html 文件，再利用 python 进行动态生成

## 运行方式

### `yarn start`

正常运行

### `yarn test`

正常测试

### `yarn build`

正常生成（生成多个文件）

### `yarn rstart`

采用覆写配置运行

### `yarn rtest`

采用覆写配置测试

### `yarn rbuild`

采用覆写配置生成单独的 html 文件
