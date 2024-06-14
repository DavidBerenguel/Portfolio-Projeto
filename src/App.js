import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contacts from './components/Contacts';




function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Main />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
