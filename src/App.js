import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import {Events} from './Events'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Navigation from './Navigation'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
        {/*<Events/>
        <ClassComponent/>*/} 
        
    </div>
  );
}

export default App;
