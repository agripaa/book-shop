import React from 'react';
import { Home } from './components/routes/index';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='container-fluid'>
      <Home />
    </div>
  );
}

export default App;
