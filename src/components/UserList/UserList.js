import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './UserList.css'
import {ReactComponent as Delete} from "../../Assets/delete.svg"
import {ReactComponent as Edit} from "../../Assets/edit.svg"

const UserList = () => {
const [users, setUser] = useState([]);

const deleteUser = async(id) =>{
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    getUsers();
}, []);

const getUsers = async()=>{
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
}
  return ( 
    <div className='data-pengunjung'>
        {users.map((user)=>(
            <div className="isi-data" key={user.id}>
                <p><strong>Nama: </strong>{user.nama}</p>
                <p><strong>NIM: </strong>{user.nim}</p>
                <p><strong>Dept: </strong>{user.dept}</p>
                <p><strong>Tanggal: </strong>{user.tanggal}</p>
                <div className='buttons-data'>
                    <div className='buttons'>
                    <Link to={`/edit/${user.id}`}>
                    <button className='button button-edit'><Edit width={27} height={25} /></button>
                    </Link>
                    </div>
                    <div className='buttons'>
                    <button onClick={()=>deleteUser(user.id)} className='button button-delete'><Delete width={27} height={25}/></button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserList