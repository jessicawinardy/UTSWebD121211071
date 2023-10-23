import './MainPage.css';
import AddUser from '../AddUser/AddUser.js';
import UserList from '../UserList/UserList.js';


function MainPage() {
  return (
    <div className="App">
    <div className="content">
        <div className='left'>
          <header>
            <h1>DATA PENGUNJUNG PERPUSTAKAAN</h1>
            <h3>Universitas Hasanuddin</h3>
          </header>
          <div className='list-pengunjung'>
            <UserList/>
          </div>
        </div>
      <AddUser/>
    </div>
    </div>
  );
}

export default MainPage;
