import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contacts from './components/Contacts';
import Skills from './components/Skills';




function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Main />
        <Skills />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
