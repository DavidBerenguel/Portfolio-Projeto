import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Home from './components/Home';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />              
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
