import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './Notes/CreateNote';
import Signup from './Auth/Signup';
import Login from './Auth/Login';


const App = () => {
    return (
        <div className='p-0 m-0 box-border w-full h-[100vh]'>
            {/* <Header /> */}
            <Routes>
                <Route exact path="/" element={
                    <>
                    <Header />
                    <CreateNote />
                    </>
                } />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;