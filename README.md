<div align="center">
<h1 align="center">react-popup-components</h1>

一款仅支持 react 框架使用的弹窗组件库

![license](https://img.shields.io/github/license/011015/react-popup-components)
![language](https://img.shields.io/github/languages/top/011015/react-popup-components)
![last](https://img.shields.io/github/last-commit/011015/react-popup-components)

</div>

### Alert

#### 代码演示

```react
import { alert } from 'react-popup-components'
function Test() {
    const [ alertApi, alertContext ] = alert.useMessage();
    const handle = () => {
        alertApi.info({
            title: 'title',
            content: 'content',
            fn() {
                console.log('abc');
                alertApi.close();
            }
        });
    }
    return (
        <>
        	<h1>Alert</h1>
        	<button onClick={handle}>click</button>
        	{alertContext}
        </>
    );
}
export default Test
```

#### API

##### 传递信息方法

- `alert.info(config)`

`config`对象属性如下：

| 参数    | 说明                 | 类型     | 默认值 |
| ------- | -------------------- | -------- | ------ |
| title   | 提示标题             | string   | -      |
| content | 提示内容             | string   | -      |
| fn      | 点击确认后的回调函数 | function | -      |

##### 关闭窗口方法

- `alert.close()`（默认点击确认后会关闭）

### Confirm

#### 代码演示

```react
import { confirm } from 'react-popup-components'
function Test() {
    const [ confirmApi, confirmContext ] = confirm.useMessage();
    const handle = () => {
        confirmApi.info({
            title: 'title',
            content: 'content',
            fn() {
                confirmApi.close();
            }
        });
    }
    return (
        <>
        	<h1>Confirm</h1>
        	<button onClick={handle}>click</button>
        	{confirmContext}
        </>
    );
}
export default Test
```

#### API

##### 传递信息方法

- `confirm.info(config)`

`config`对象属性如下：

| 参数    | 说明                 | 类型     | 默认值 |
| ------- | -------------------- | -------- | ------ |
| title   | 提示标题             | string   | -      |
| content | 提示内容             | string   | -      |
| fn      | 点击确认后的回调函数 | function | -      |

##### 关闭窗口方法

- `confirm.close()`（默认点击确认后会关闭）

### Toast

#### 代码演示

```react
import { toast } from 'react-popup-components'
function Test() {
    const [ toastApi, toastContext ] = toast.useMessage();
    const handle = () => {
        toastApi.info('content');
    }
    return (
        <>
        	<h1>Confirm</h1>
        	<button onClick={handle}>click</button>
        	{toastContext}
        </>
    );
}
export default Test
```

#### API

##### 传递信息方法

- `toast.info(content)`

| 参数    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| content | 提示内容 | string | -      |

#####
