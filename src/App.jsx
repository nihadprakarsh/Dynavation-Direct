import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="button-container">
          <a href="mailto:info@dynavationelectronics.com" onclick="window.location=another.html" className="btn btn-primary">Email</a>
          <a href="https://wa.link/0p0zyi" className="btn btn-success">Whatsapp</a>
          <a href="https://dynavationelectronics.com/" className="btn btn-info">Website</a>
        </div>
      </div>
    </div>
  );
}

export default App;
