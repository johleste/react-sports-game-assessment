import React, { Component } from 'react';
class Game extends Component {
    constructor(props) {

      super(props);
      this.state = {
        hasShot: false
      };
    }
      render() {
        return (
          <div className="GameDiv">
            <h1>WELCOME TO {this.props.venue}</h1>
          </div>
        )
      }
    }
    export default Game;