# fileicons-classic

从 https://github.com/zfile-dev/zfile-vue 复制过来的经典网盘文件图标

![image.png](https://s2.loli.net/2023/05/21/xSazkwlIhoLcFpP.png)


## use

```ts
// npm i --save fileicons-classic
import { getFileIconName, iconData } from "fileicons-classic"
const filename = '/Users/d1y/Downloads/dev.mp4'
const result = getFileIconName(filename) // result is 'video'
const svgIconData = iconData.get(result)
const $el = document.createElement('div')
$el.innerHTML = svgIconData
```