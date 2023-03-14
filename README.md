# 动态考试许可证

<div align="center">
    <img  src="https://github-readme-streak-stats.herokuapp.com/?user=LunaSekiii" />
</div>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=ZCOOL+KuaiLe&size=30&pause=1000&color=434B9E&background=8085BC00&center=true&vCenter=true&width=435&lines=%E5%8A%A8%E6%80%81%E8%80%83%E8%AF%95%E8%AE%B8%E5%8F%AF%E8%AF%81)](https://git.io/typing-svg)

这是个小项目，用于给学院基地考核的密码生成系统提供动态界面。

[动态考试许可证预览地址](https://lunasekiii.github.io/examination-permit/build/)

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
