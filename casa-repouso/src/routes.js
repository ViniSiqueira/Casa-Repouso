import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/login';
import Home from './pages/Home/home'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login/>}/>
                <Route path='/home' element={ <Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;