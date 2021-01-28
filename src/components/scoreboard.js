import React  from 'react';
import Team from './team'
import Game from './game'
import Dodgers from "./assets/images/Dodgers.jpg"
import Spurs from "./assets/images/spurs.png"



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
            img= {Dodgers} score="0"
          />
          <div className="App">
            <Team
              name="Spurs"
              img={Spurs} score="0"
            />

          </div>
        </div>
      </div>
      </div>
    )
  }


  export default Scoreboard;