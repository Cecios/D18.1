import { useEffect, useState } from "react";


const Dep = ()=>{

    const [count,setCount] = useState(2)
    const [doubleCount,setDoubleCount] = useState(0)

    useEffect(()=>{
        setDoubleCount(count*2)
    },[count])

    const increment = ()=>{
        setCount(count + 1)
    }

    return(
        <div>
            <p>Il contatore è {count}</p>
            <p>Il suo doppio è: {doubleCount}</p>
            <button onClick={increment}>Incrementa</button>
        </div>
    )
}
export default Dep;