import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Module1 from './modules/Module1';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container App-wrapper">
          <Module1 />
        </div>
      </>
    );
  }
}

export default App;
