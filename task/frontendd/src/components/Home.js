import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user,SetUser] = useState([])
    const getuser = async() => {
        const data = await fetch('http://localhost:5000/user');
        const result = await data.json()
        console.log(result)
        SetUser(result)
    }
const navigate = useNavigate()
    useEffect(()=>{
        getuser()
    },[])

    const deleteUser = async(id) => {
        const data = await fetch(`http://localhost:5000/delete-user/${id}`,{
            method:"DELETE",
            
        })

        const result = await data.json()
        console.log(result)
        if(result){
navigate('/')
        }
    }
  return (
    <div>
   
      <table style={{width:"100%"}}>
  <tr>
    <th>name</th>
    <th>email</th>
    <th>username</th>
    <th>contact</th>
    <th>action</th>

  </tr>
 {
 user.map((item,i)=>{
        return(
            <>
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.contactinfo}</td>
                <td><Link to={`/edit/${item._id}`}><button>edit</button></Link><button onClick={()=>deleteUser(item._id)}>delete</button></td>

                

            </tr>
            </>
        )
    })
 }
 <Link to="/add"><button>adddata</button></Link>
</table>
    </div>
  )
}

export default Home
