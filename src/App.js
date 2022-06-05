import './App.css';
import { Component } from 'react';
import Solution from './components/Solution.js'
import Score from './components/Score.js'
import Letters from './components/Letters';
import Letter from './components/Letter';

class App extends Component {
  constructor() {
    super()
    this.state = {
      lettersStatus: this.generateLettersStatuses(),
      solution: { word: "CALM", hint: "Your ideal mood when coding" },
      score : 100
    }
  }

  generateLettersStatuses() {
    let lettersStatus = {}
    for (let i = 65; i < 91; i++) {
      lettersStatus[String.fromCharCode(i)] = false
    }
    return lettersStatus
  }

  render() {

    let lettersStatus = this.state.lettersStatus
    let solution = this.state.solution
    let score = this.state.score

    return (
      <div className="App">
        <Solution lettersStatus={lettersStatus} solution={solution} />
        <Score score={score}/>
        <Letters lettersStatus={lettersStatus} />
      </div>
    )

  }
}

export default App;
