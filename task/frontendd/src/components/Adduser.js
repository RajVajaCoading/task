import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adduser = () => {

    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [contactinfo, setContact] = useState('')
    const navigate = useNavigate()

    const addData = async() => {
        // console.log(name,email)
        const data = await fetch('http://localhost:5000/register',{
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,username,contactinfo})
        })
        const result = data.json()
        if(result){
            navigate('/')
        }
    }

    return (
        <div>
            <h1>Adduser data</h1>
            <input type='text' placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)} /> <br /><br />
            <input type='text' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
            <input type='text' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /><br />
            <input type='number' placeholder='enter contact' value={contactinfo} onChange={(e)=>setContact(e.target.value)} /> <br /><br />
            <button onClick={addData}>add data</button>



        </div>
    )
}

export default Adduser
