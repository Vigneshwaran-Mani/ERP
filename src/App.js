import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import  Product from './pages/Product';
import  Calendar from './pages/Calendar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

const App = () =>{
    const {activeMenu} = useStateContext();
    return(
        <div>
            <BrowserRouter>
                <div className="flex relative rounded-2xl">
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar rounded-2xl bg-white"><Sidebar/></div>) : (<div className="w-0 "><Sidebar/></div>)}
                        <div className={`bg-main-bg min-h-screen w-full ${activeMenu ?'md:ml-72':'flex-2' }`}>
                            <div className="fixed md:static bg-main-bg navbar w-full">
                                <Navbar/>
                            </div>
                    <div>
                        <Routes>
                            <Route path="/" element={<Dashboard/>} ></Route>
                            <Route path="/dashboard" element={<Dashboard/>}></Route>
                            <Route path="/products" element={<Product/>}></Route>
                            <Route path="/orders" element={<Orders/>}></Route>
                            <Route path="/calendar" element={<Calendar/>}></Route>
                        </Routes>
                    </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;