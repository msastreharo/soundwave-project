import Main from './components/Main.js'
import Navbar from './components/Navbar.js';
import Discover from './components/Discover.js'
import Join from './components/Join.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Discover />
      <Join />
    </div>
  );
}

export default App;
