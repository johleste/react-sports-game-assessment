import React, {Component} from 'react';
class Team extends Component {
    constructor(props) {
      super(props);
      this.state = {
        shotsTaken: 0,
        score: 0
      }
    }
    shoot = () => {
      var shootSound = new Audio('./Swish+2.wav');
      shootSound.play();
      let score = this.state.score;



        if ((Math.random() * 100) + 1 > 50) {
          var scoreSound = new Audio('.src/assets/sounds/cheer.wav');
          scoreSound.play();
          score = this.state.score + 1
        }
        this.setState((state, props) => ({
          shotsTaken: state.shotsTaken + 1,
          score
        }
    
        )

        )  
        this.setState({ hasShot: true })
      }
    

      render() {
        let percentageDiv
        if (this.state.shotsTaken) {
        const Percentage = Math.round((this.state.score / this.state.shotsTaken)*100)
        percentageDiv = (

          <div className="percentageDiv">
            Shot Percentage: {Percentage}%
          </div>
        )
        }

        
        return (
          <div className="TeamDiv">
            <img height='200px' width='200px' src={this.props.img} alt="TeamPic" />

            <h1>{this.props.name}</h1>
            <div>

            </div>
            <button onClick={this.shoot}>Shoot Button</button>

            <div>Shots fired:{this.state.shotsTaken}
      Score: {this.state.score}

            </div>
            {percentageDiv}
          </div>
        )
      }
    }
    export default Team;