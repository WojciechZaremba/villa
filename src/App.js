import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Bedroom from './rooms/bedroom';
import CourageView from './rooms/courageView';
// import GenericRoom from './rooms/genericRoom';
// import Hall from './rooms/hall';
import { useState } from "react";

function App() {
  const [fadingOut, setFading] = useState(false);
  function handleClick() {
    setFading(!fadingOut)
  }
  return (
    <Router>
      <div className="App" style={fadingOut ? {filter: 'blur(3px)'} : undefined }>
        <header className="App-header" onClick={handleClick}>ererererrtrtrtrt
        <Navbar />
        </header>
        <Routes>
          <Route path="/bedroom" element={<Bedroom handleClick={handleClick} />} />
          {/* <Route path="/hall" element={<Hall />} /> */}
          <Route path="/courageView" element={<CourageView />} />
          {/* <Route path="/genericRoom" element={<GenericRoom />} /> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
