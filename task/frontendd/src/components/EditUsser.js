import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const EditUsser = () => {
const params = useParams()
console.log(params.id)
const id = params.id
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [contactinfo, setContact] = useState('')
    const navigate = useNavigate()

    const getuser = async() => {
        const data = await fetch(`http://localhost:5000/users/${id}`);
        const result = await data.json()
        console.log(result)
        setname(result.name)
        setEmail(result.email)
        setUsername(result.username)
        setContact(result.contactinfo)
    }

    useEffect(()=>{
        getuser()
    },[])

    const editData = async(id) => {
        // console.log(name,email)
        const data = await fetch(`http://localhost:5000/user/${id}`,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,username,contactinfo})
        })
        const result = await data.json()
        console.log(result)
        if(result){
            navigate('/')
        }
    }




    return (
        <div>
            <h1>edituser data</h1>
            <input type='text' placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)} /> <br /><br />
            <input type='text' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
            <input type='text' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /><br />
            <input type='number' placeholder='enter contact' value={contactinfo} onChange={(e)=>setContact(e.target.value)} /> <br /><br />
            <button onClick={editData}>edit data</button>



        </div>
    )
}

export default EditUsser
