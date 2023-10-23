import React, {useState} from 'react';
import axios from 'axios';
import './AddUser.css';
import {useNavigate} from "react-router-dom";


const AddUser = () => {
const [nama,setNama] = useState("");
const [nim,setNim] = useState("");
const [dept,setDept] = useState("");
const [tanggal,setTanggal] = useState("");

function refreshPage() {
  window.location.reload(false);
}

const saveUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users',{
            nama,
            nim,
            dept,
            tanggal
        });
        
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='add-user'>
    <form className="form" onSubmit={saveUser}>
        <h1>Form Pengunjung</h1>
        <div className="input input-nama">
          <label for="input-nama">Nama</label>
          <input className='inputbox' type="text" id="input-nama" placeholder="Masukkan Nama" value={nama} onChange={(e)=>setNama(e.target.value)} />
        </div>
        <div className="input input-nim">
          <label for="input-nim">NIM</label>
          <input className='inputbox' type="text" id="input-nim" placeholder="Masukkan NIM" value={nim} onChange={(e)=>setNim(e.target.value)} />
        </div>
        <div className="input input-dept">
          <label for="input-dept">Departemen</label>
          <select className='inputbox' id="input-dept" value={dept} onChange={(e)=>setDept(e.target.value)}>
            <option value={null}>Pilih nama departemen</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Teknik Perkapalan">Teknik Perkapalan</option>
            <option value="Teknik Pertambangan">Teknik Pertambangan</option>
            <option value="Teknik Mesin">Teknik Mesin</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
          </select> 
        </div>
        <div className='input input-date'>
          <label for="input-date">Tanggal Kunjungan</label>
          <input className='inputbox' type="date" id="input-date" value={tanggal} onChange={(e)=>setTanggal(e.target.value)}/>
        </div>
        <button type="submit" onClick={refreshPage}>Submit</button>
      </form>
    </div>
  )
}

export default AddUser