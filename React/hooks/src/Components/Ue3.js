import React , {useState, useEffect}from "react";

// const [emoji, se]
const Ue3 = () => {
    const [count, setCount] = useState(0);
    const [msg, setMsg]=useState({sayHi:"i am hooked"});
  
    useEffect(()=>{

        console.log("useeffect is called");
        document.title =`Button clicked ${count} times`; 
    }, [count])


    let changeText =(e)=>{

      msg.sayHi =e.target.value;
      console.log(msg);
      //setMsg({...msg})
    }
    console.log("render");

  return (
   
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        <input type="text" value ={msg.sayHi} onChange={(e)=> changeText(e)}></input>
 
    </div>
  )
}

export default Ue3