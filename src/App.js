import logo from './logo.svg';
import './App.css';
import Review from './components/Review';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import View from './components/View';
import { Route, Routes } from 'react-router';
import reactDom from 'react-dom';
import Add from './components/Add'
import Search from './components/Search';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
     
      
    
      <BrowserRouter>
     <Header/>
     <Routes>
     {/* <Route path="/view" exact element={<Login/>}/> */}
     <Route path="/view" exact element={<View/>}/>
     <Route path="/add" exact element={<Add/>}/>
     <Route path="/search" exact element={<Search/>}/>
     </Routes>
     </BrowserRouter>
     {/* <img src="/spider-mannowayhome_lob_crd_02 (1).jpg" alt="spiderman"></img>
      <img src="/spider-mannowayhome_lob_crd_02 (1).jpg" alt="spiderman"></img>
      <img src="/spider-mannowayhome_lob_crd_02 (1).jpg" alt="spiderman"></img> */}
    </div>
  );
}

export default App;
