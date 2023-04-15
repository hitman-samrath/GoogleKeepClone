import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './Notes/CreateNote';
import Signup from './Auth/Signup';
import Login from './Auth/Login';


function App() {
    return (
        <div className='p-0 m-0 box-border'>
            <Header/>
            <Signup/>
            <Login/>
            <CreateNote />
            <Footer />
        </div>
    );
}

export default App;