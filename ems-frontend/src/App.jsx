import { Route,Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='' element={<Admin/>}/>
         <Route path='add' element={<Add/>}/>
          <Route path='view/:id' element={<View/>}/>
            <Route path='edit/:id' element={<Edit/>}/>
              <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
