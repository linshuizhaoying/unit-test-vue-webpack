# 说明

单元测试自动化环境。
src目录中的vue文件夹是源文件夹。
dist目录下是输出文件夹
test目录下是测试案例。
unitTestResult目录下是web界面的测试输出。

切换方式如下：
当你想要进行单元测试 运行：karma start
当你想要进行工程构建 运行：webpack -w


## 主要功能

结合karma,mocha,should打造的自动化单元测试环境。
配合vue与webpack.
能独立对vue格式的文件进行单元测试。
注意：通用版并没添加许多插件，比如对sass的解析等等。需要自己添加。

## 环境

请自行先运行以下命令全局安装插件：

```
npm install -g karma
npm install -g karma-cli
npm install -g mocha

```

然后在根目录下运行:
npm install

