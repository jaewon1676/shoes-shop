import './App.css';
import Main from './components/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './components/Detail';
import Cart from './components/Cart';


function App() {

    return (
        
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main  /> }/>
                    <Route path='/detail' element={<Detail /> }/>
                    <Route path='/detail/:id' element={<Detail /> }/>
                    <Route path='/cart' element={<Cart /> }/>
                </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default App;
