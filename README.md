# ORM

## API接口字段映射

[API documentation](https://lisfan.github.io/orm/)

## Feature 特性


## Detail 详情
        id: 'uid', // 先匹配的不会被下一次匹配的映射中(内部会做占位，移除该功能)
        ''
        'uid': 'jjjj.uid',  // 支持这样的映射
        'uid.xxx': 'jjjj.uid',  // 支持这样的映射
        'jjjj.uid.xxx': 'jjjj.uid',  // 支持这样的映射

## Install 安装

```bash
npm install -S @~lisfan/orm
```

## Usage 起步

```js
import ORM from '@~lisfan/orm'

