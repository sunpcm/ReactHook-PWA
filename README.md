# ReactHook-PWA
A ticket demo with react hooks and pwa



## 1. context实现跨层级组建传递

使用createContext创建Context，然后使用`Provider`嵌套，再在`Consumer`里取值

```jsx
const BatteryContext = createContext();
···
//组建A
<BatteryContext.Consumer value={value}>
</BatteryContext.Consumer>
···
//组建B
return (
  <BatteryContext.Consumer>
    {
      battery=>{<h1>Battery:{battery}</h1>
    }
  </BatteryContext.Consumer>
)

```

- 可是在createContext付默认值

## 2. contextType

在class组件的react中，可以使用

```js
static contextType = StateContext;
```

在React Hooks中可以调用`useContext`：

```jsx
//组建B
const battery = useContext(BatteryContext);
  return (
    <h1>Batter:{battery}</h1>
  )
```

## 3. Lazy

`React.lazy` 接受一个函数，这个函数需要动态调用 `import()`。它必须返回一个 `Promise`，该 Promise 需要 resolve 一个 `defalut` export 的 React 组件。

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

`fallback` 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 `Suspense` 组件置于懒加载组件之上的任何位置。你甚至可以用一个 `Suspense` 组件包裹多个懒加载组件。

```js
<Suspense fallback={<div>Loading...</div>}>
  <section>
    <OtherComponent />
  </section>
</Suspense>
```

### 异常捕获边界（Error boundaries）

如果一个 class 组件中定义了 [`static getDerivedStateFromError()`](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror) 或 [`componentDidCatch()`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch) 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

然后可以将它作为一个常规组件去使用：

```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

- `componentDidCatch` and `getDerivedStateFromError`：目前还没有这些方法的 Hook 等价写法，但很快会加上。

### 