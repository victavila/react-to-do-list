import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css";
import MainRoute from './routes/MainRoute';
import AppContextProvider from './contexts/AppContextProvider';
import Modals from './components/Modals/Modals';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Sidebar />
        <MainRoute />
        <Modals />
      </AppContextProvider>
    </div>
  );
}

export default App;
