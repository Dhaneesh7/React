import { useRef, useState } from 'react';
export default function Home(){
    const [pass,setPass]=useState("Rogersoft");
    const olpass=useRef()
    const newpass=useRef()
    const copass=useRef()
    const verify = (e) => {
        e.preventDefault();
        if(olpass.current.value==pass)
        {
        
        
    
    if(newpass.current.value==copass.current.value){
        setPass(newpass.current.value);
        console.log("password changed")
        alert("password changed")
    }
    else{
        console.log("confirm password is incorrect")
    }}
else{
    console.log("incorrect old password")
}
    }
    
    return(
        <form onSubmit={verify}> 
            <input type='text' placeholder='old password' ref={olpass}/><br/>
            <input type='text' placeholder='new password' ref={newpass}/><br/>
            <input type='text' placeholder='comfirm password' ref={copass}/><br/>
            <button>submit</button>
        </form>
    )
}
