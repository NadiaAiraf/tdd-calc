// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         hello world!
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';

const App = () => (
  <div className="app-container">
    <Calculator />
  </div>
);

export default App;