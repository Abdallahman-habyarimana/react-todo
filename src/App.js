import React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
  
  render() { 
    return ( 
      <div className="container">
          <Todo />
        </div>
   );
  }
}

export default App;



 
