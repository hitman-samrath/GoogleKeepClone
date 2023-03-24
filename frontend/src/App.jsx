import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';


function App() {
    return (
        <div className='p-0 m-0 box-border'>
            <Header/>
            <CreateNote />
            <Footer />
        </div>
    );
}

export default App;