import React , {useState, useEffect}from "react";

// const [emoji, se]
const Infinite = () => {
    const [count, setCount] = useState(0);
  
    // useeffection function call one time
    // useEffect(()=>{

    //     console.log("useeffect is called");
    //     document.title =`Button clicked ${count} times`; 
    //     // setCount(10);

    //     let rnum = Math.random()*100;
    //     setCount(rnum);

    // },[]);

        
    useEffect(()=>{

        console.log("useeffect is called");
        document.title =`Button clicked ${count} times`; 
        // setCount(10);

        let rnum = Math.random()*100;
        setCount(rnum);

    });


    console.log("render");

  return (
   
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>

 
    </div>
  )
}

export default Infinite