# ReactHook-PWA
A ticket demo with react hooks and pwa



## 1 context实现跨层级组建传递

使用createContext创建Context，然后使用`Provider`嵌套，再在`Consumer`里取值

```js
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

## 2 contextType

在class组件的react中，可以使用

```js
static contextType = StateContext;
```

在React Hooks中可以调用`useContext`：

```js
//组建B
const battery = useContext(BatteryContext);
  return (
    <h1>Batter:{battery}</h1>
  )
```

