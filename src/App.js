import './App.css';
import Home from './components/home/Home';



function App() {
  return (
    <>
    <div className="App">
      <h1>My News Website</h1>
      {/* This <Home/> is the function name in the folder components/home/Home.js */}
      <Home/>
    </div>
    </>
  );
}

export default App;
