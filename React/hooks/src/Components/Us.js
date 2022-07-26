// import { View, Text } from 'react-native'
import React , {useState}from "react";

// const [emoji, se]
const Us = () => {
    const [count, setCount] = useState(0);
    const [emoji , setemoji] = useState("😀");
    const [msg, setMsg]=useState({sayHi:"i am hooked"});
  return (
   
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>

        <div>
            <button onClick={()=>setemoji("😄")}>Laugh</button>
            <p>{emoji}</p>
            <button onClick={()=>setemoji("😭")}>Cry</button>

        </div>
        <p>{msg.sayHi}</p>
    </div>
  )
}

export default Us