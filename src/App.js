import {useState} from "react"
function App() {
  const [counter,setCounter] = useState(0)
  const container = {
    marginLeft : "10px"
  }
  return (
    <div style={container}>
      <div><h1>Counter App</h1></div>
      <div>Count: {counter}</div>
      <div style={{marginTop:"20px"}}><button onClick={()=>{
        setCounter((prevValue)=>{
          return prevValue+1
        })
      }}>Increment</button><button onClick={()=>{
        setCounter((prevValue)=>{
          return prevValue-1
        })
      }}>Decrement</button></div>
    </div>
  );
}

export default App;
