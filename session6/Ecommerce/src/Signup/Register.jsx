import React, { useEffect, useState } from 'react'
import Email from './Email';
import PersonalData from './PersonalData';


export default function Register() {
    const [page,setpage] = useState(0);
    const [email,setemail] = useState('');
    const [username,setusername] = useState('');
    const [phonenum,setphonenum] = useState('');
    const [address,setaddress] = useState('');
    const [landmark,setlandmark] = useState('');


    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@kgm\.com$/;
        return regex.test(email);
      }


    const updatepage =()=>{
        if(isValidEmail(email))
        {
            setpage(1)
            alert("Email is set")
        }
        else{
            alert("Enter the Email")
        }
    }

    useEffect(()=>{
        console.log("Rendering");
    },[page,username])

    

    const handlesubmit =()=>{
        console.log(email);
        console.log(username);
        console.log(phonenum);
        console.log(address);
        console.log(landmark);
    }
  return (
    <div>
        {
            page==0 && <Email setpage={updatepage} setemail={setemail}/> || 
            page==1 && <PersonalData setusername={setusername} setphonenum={setphonenum}
            setaddress={setaddress}
            setlandmark={setlandmark}
            handlesubmit={handlesubmit}/>
        }
    </div>
    
  )
}
