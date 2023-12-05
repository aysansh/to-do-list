import {useState} from 'react'



type propsType ={
    type:'text';
    placeholder?:string;
}

function TextInput({type,placeholder}:propsType) {
    const [task,setTask]=useState("")
    const handleClick=(e:any)=>{
setTask(e.target.value)
    }
  return (
    <div>
        <input value={task} type={type} placeholder={placeholder} />
    <button onClick={handleClick:any}>ADD</button>
    </div>
    
  )
}

export default TextInput