import React, {useState, useEffect} from 'react';
import axios from "axios";
import './EditUser.css'
import {useNavigate, useParams} from "react-router-dom";

const EditUser = () => {
const [nama,setNama] = useState("");
const [nim,setNim] = useState("");
const [dept,setDept] = useState("");
const [tanggal,setTanggal] = useState("");

const navigate = useNavigate();
const {id} = useParams();

useEffect(()=>{
    getUserById();
},[]);

const updateUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/users/${id}`,{
            nama,
            nim,
            dept,
            tanggal
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async()=>{
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNama(response.data.nama);
    setNim(response.data.nim);
    setDept(response.data.dept);
    setTanggal(response.data.tanggal);
}

  return (
    <form className="form-edit" onSubmit={updateUser}>
        <h1>Edit Data</h1>
        <div className="input-edit input-nama">
          <label for="input-nama">Nama</label>
          <input className='inputbox-edit' type="text" id="input-nama" placeholder="Masukkan Nama" value={nama} onChange={(e)=>setNama(e.target.value)} />
        </div>
        <div className="input-edit input-nim">
          <label for="input-nim">NIM</label>
          <input className='inputbox-edit' type="text" id="input-nim" placeholder="Masukkan NIM" value={nim} onChange={(e)=>setNim(e.target.value)} />
        </div>
        <div className="input-edit input-dept">
          <label for="input-dept">Departemen</label>
          <select className='inputbox-edit' id="input-dept" value={dept} onChange={(e)=>setDept(e.target.value)}>
            <option value={null}>Pilih nama departemen</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Teknik Perkapalan">Teknik Perkapalan</option>
            <option value="Teknik Pertambangan">Teknik Pertambangan</option>
            <option value="Teknik Mesin">Teknik Mesin</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
          </select> 
        </div>
        <div className='input-edit input-date'>
          <label for="input-date">Tanggal Kunjungan</label>
          <input className='inputbox-edit' type="date" id="input-date" value={tanggal} onChange={(e)=>setTanggal(e.target.value)}/>
        </div>
        <button className='button-editpage' type="submit">Edit Data</button>
      </form>
  )
}

export default EditUser;