import React, { useState } from 'react';
import './App.css';
import Write from './Write';
import Read from './Read';
import airplaneimg from './assets/airplane.png';
function App() {
  const [activeButton, setActiveButton] = useState('write');

  return (
    <div className="mainbackground">
      <label className='header-label'>Travelog</label>
      <img src={airplaneimg} alt="airplane" className="airplane-image" />
      <div className="mainpage-wrapper" >
        <header className="header">
          <div
            className={`headerbutton ${activeButton === 'write' ? 'activeButton' : ''}`}
            onClick={() => setActiveButton('write')}
          >
            Write
          </div>
          <div
            className={`headerbutton ${activeButton === 'read' ? 'activeButton' : ''}`}
            onClick={() => setActiveButton('read')}
          >
            Read
          </div>
        </header>
        <main className="mainarticle">
          {activeButton === 'write' && <Write />}
          {activeButton === 'read' && <Read />}
        </main>
      </div>
    </div>
  );
}

export default App;
