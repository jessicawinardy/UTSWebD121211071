import MainPage from './components/MainPage/MainPage.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditUser from './components/EditUser/EditUser.js'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='edit/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
