import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' element={< Login />} ></Route>
              <Route exact path='/register' element={< Register />} />
              <Route exact path='/home' element={< Home />} />
          </Routes>
      </Router>
  );
}

export default App;
