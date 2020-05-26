import React,{useState} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue:'0',
    clearDisplay:false,
    operation:null,
    values:[0,0],
    current:0,
    index:0
}
        
const [estado,setEstado] =useState("")

const Calculator =()=>{

    setEstado(...initialState)


    const clearMemory=()=> {
        setEstado(...initialState)
    }

    const setOperation=(operation)=> {
        if(estado.index==0){
            setEstado({operation,index:1,clearDisplay:true})
        }else{
            let equals= operation=='='
            let currentOperation= estado.operation

            let values = [...estado.values]
            try{
                values[0]=eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }catch(e){
                values[0]=estado.values[0]
            }
            values[1]=0
            setEstado({
                displayValue:values[0],
                operation:equals?null:operation,
                index:equals?0:1,
                clearDisplay:!equals,
                values
            })
        }
    }

    const addDigit=(n)=> {
        if(n==='.'&&State.displayValue.includes('.')) return
            let newValue = parseFloat(estado.displayValue)
            let values = [estado.values]
            values[estado.index]=newValue
            let obj={
                clearDisplay:estado.clearDisplay,
                current:estado.clearDisplay?'':estado.displayValue,
                displayValue:estado.current + n,
                index:estado.index,
                values
            }
            
            setEstado({...obj})
        }
    }

    return(
            
            <div className="calculator">
                <Display value={estado.displayValue}/>
                <Button label="AC" click={()=>clearMemory} triple/>
                <Button label="/" click={()=>setOperation} operation/>
                <Button label="7" click={()=>addDigit}/>
                <Button label="8" click={()=>addDigit}/>
                <Button label="9" click={()=>addDigit}/>
                <Button label="*" click={()=>setOperation} operation/>
                <Button label="4" click={()=>addDigit}/>
                <Button label="5" click={()=>addDigit}/>
                <Button label="6" click={()=>addDigit}/>
                <Button label="-" click={()=>setOperation} operation/>
                <Button label="1" click={()=>addDigit}/>
                <Button label="2" click={()=>addDigit}/>
                <Button label="3" click={()=>addDigit}/>
                <Button label="+" click={()=>setOperation} operation/>
                <Button label="0" click={()=>addDigit} double/>
                <Button label="." click={()=>addDigit}/>
                <Button label="=" click={()=>setOperation} operation/>
            </div>
    )
    

}
export default Calculator