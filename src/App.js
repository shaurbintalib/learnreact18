import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Menu from './Views/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' exact Component = {Home}></Route>
          <Route path='/menu' exact Component = {Menu}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
