import React , {useState, useEffect}from "react";

// const [emoji, se]
const Ue1 = () => {
    const [count, setCount] = useState(0);
  
    useEffect(()=>{

        console.log("useeffect is called");
        document.title =`Button clicked ${count} times`; 
    })

    console.log("render");

  return (
   
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>

 
    </div>
  )
}

export default Ue1