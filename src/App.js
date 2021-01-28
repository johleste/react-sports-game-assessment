import React from 'react'
import ReactDOM from 'react-dom'
import Scoreboard from './components/scoreboard';




  function App() {
  
    return (
     
      <div className="Scoreboard">
        <Scoreboard />
      </div>
    )
    
  } 
  
  ReactDOM.render(
  <App />,
    document.getElementById('root')
    );


export default App;
