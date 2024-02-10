import { useDispatch, useSelector } from "react-redux"
import { addNumber, calculateResult, clear } from "./calSlice";

const Calculator=()=>{
    const dispatch=useDispatch();
    const display=useSelector((state)=>state.calculator.display);
    const handleButtonClick=(value)=>{
        if(value==='='){
            dispatch(calculateResult());
        }
        else if(value==='C'){
            dispatch(clear());
        }
        else{
            dispatch(addNumber(value));
        }
    };
    return(
        <>
        <div>
            <input type="text" value={display} readOnly/>
            <div>
                {['7','8','9','\n','4','5','6','\n','*','1','2','3','\n','-','0','C','=','+'].map((button)=>(
                    <button key ={button} onClick={()=>handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}
export default Calculator;