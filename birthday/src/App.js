import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img 
          src="https://raw.githubusercontent.com/DenverCoder1/Responsive-Birthday-Card/main/birthday.svg" 
          alt="birthday" 
          className="birthday" 
        />
        <div className="text">
          <h1>Happy Birthday Shiva Shankari Mam!</h1>
          <p>Wishing you joy, success, and good health!</p>
          <p>Your guidance inspires me every day.</p>
          <p className="muted">Thank you for being an amazing teacher!</p>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default App;
