import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import IndiaRecipes from './components/Recipes';
import Home from './components/Home';
import Addrecipes from './components/Addrecipes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Recipes' element={<IndiaRecipes/>}></Route>
        <Route path='/AddReceipes' element={<Addrecipes/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
