# Decoupler

## 简介

轻量级发布订阅库。

## 安装

### git

```
git clone https://github.com/longjiarun/decoupler.git decoupler
```

### npm

```
npm install decoupler --save

//指定版本
npm install decoupler@version --save
```

### bower

```
bower install decoupler --save

//指定版本
bower install decoupler#version --save
```

## API

Decoupler 采用UMD的方式。

```
// 全局变量
decoupler.on('event',function(args){
    //do something
});
decoupler.emit('event',[1,2]);

// commonjs
var decoupler = require('decoupler');
decoupler.on('event',function(args){
    //do something
});
decoupler.emit('event',[1,2]);
```

### 方法

#### on

订阅消息。

| 参数      | 名称说明 | 类型       | 是否必填 | 默认值  |
| ------- | ---- | -------- | ---- | ---- |
| name    | 消息名称 | String   | 是    |      |
| handler | 回调函数 | Function | 是    |      |

```
decoupler.on('event',function(args){
    //do something
});
```

#### off

取消订阅消息。可取消消息中某个回调或者可取消消息中全部回调。

| 参数      | 名称说明 | 类型       | 是否必填 | 默认值  |
| ------- | ---- | -------- | ---- | ---- |
| name    | 消息名称 | String   | 是    |      |
| handler | 回调函数 | Function | 否    |      |

```
// 取消订阅消息中某个回调
decoupler.off('event',handler);

// 取消订阅消息中所有回调
decoupler.off('event');
```

#### emit

发布消息。

| 参数   | 名称说明 | 类型     | 是否必填 | 默认值  |
| ---- | ---- | ------ | ---- | ---- |
| name | 消息名称 | String | 是    |      |
| data | 消息数据 | 任意     | 否    |      |
