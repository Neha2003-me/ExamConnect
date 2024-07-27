import { useState } from "react";
import axios from "axios";

const LoginForm=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'Project=ID':"23cf1894-100c-4773-ba1a-98ec2b366700",'User-Name':username,'User-Secret':password};
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        window.location.reload();
        try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject})
        }catch(error)
        {
           setError('Oops, incorrect credentials.')
        }
    }
    return(
        <div className="wrapper">
            <div className="form">
               <h1 className="title">Chat Application</h1>
               <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username"required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password"required/>
                <div align="center">
                    <button type="submit" className="button">
                          <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
               </form>
            </div>
        </div>
    )
}
export default LoginForm;