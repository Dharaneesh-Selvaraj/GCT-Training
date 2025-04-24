import React, { useState } from 'react'

export default function AddToCartBtm() {
    // Value is Variable
    // Setvalue is function that is used to assign or update the value
    let [value,setvalue] = useState(0);

    const inc  =()=>{
        setvalue(value+1)
        console.log(value);
        
    }
    const dec  =()=>{
        value<=0 ? setvalue(0) : setvalue(value-1);
        console.log(value);
        
    }
  return (
    <div>
        {
            value>0?
            <div>
                <button className='bg-blue-700 text-black p-3 rounded-tl-md rounded-bl-md active:scale-90' onClick={inc}>Increment</button>
                <button className='bg-white text-black p-3 '>{value}</button>
                <button className='bg-blue-700 text-black p-3 rounded-tr-md rounded-br-md active:scale-90' onClick={dec}>Decrement</button> 
            </div>:
            <button className='bg-blue-700 text-black p-3 rounded-md active:scale-90' onClick={inc}>AddToCart</button>
        }
        
    </div>
  )
}
