import React  from 'react';
import Team from './team'
import Game from './game'


function Scoreboard(props) {

    return (
   
        <div className ="ScoreBoard">
      <div className="App">
        <Game
          venue="RAINBOW CASTLE"
        />
        <div className="App" >
          <Team
            name="Dodgers"
            img="./assets/images/dodgers.jpg" score="0"
          />
          <div className="App">
            <Team
              name="Spurs"
              img="./assets/images/spurs.jpg" score="0"
            />

          </div>
        </div>
      </div>
      </div>
    )
  }


  export default Scoreboard;