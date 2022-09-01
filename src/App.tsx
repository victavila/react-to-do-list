import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css";
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainRoute />
    </div>
  );
}

export default App;
