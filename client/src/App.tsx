import './App.css';
import Header from './Header';
import Footer from './Footer';

const App:React.FC=() => {
  return (
    <>
      <Header/>
      <h1 className='underline'>Hello World From TSX</h1>
      <Footer/>
    </>
  );
}

export default App;
