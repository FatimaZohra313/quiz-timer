import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

function Timer(props){

let {className,score ,name} = props    




const [sec,setSec] = useState(0)   
const [min,setMin] = useState(1)
let [result,setResult] = useState(false)

let timer ;
useEffect(()=>{
    timer = setInterval(()=>{
        setSec(sec + 1)
        if (sec === 59){
            setMin(min - 1)
            setSec(0)
            
        }
        else if (min === 0){
            setSec(0)
           
        }

    },1000)
    return ()=>clearInterval(timer)

})
if (min == 0 && sec == 0){
    clearInterval(timer)
    {name()}

    

    return (
        <div className={className}>
            <h1>your time is over your score is {score}</h1>
        </div>

    )
}
else {
    return (
        <div className={className}>
            <h1>{min < 10? "0" + min: min}:{sec < 10 ? "0" + sec : sec}</h1>
        </div>
    )
}

}
// Timer();
export default Timer;
