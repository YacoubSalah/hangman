import './App.css';
import { Component } from 'react';
import Solution from './components/Solution'
import Score from './components/Score.js'
import Letters from './components/Letters';
import NewGame from './components/NewGame'

class App extends Component {
  constructor() {
    super()
    this.solutions = [
      { word: 'SPRITE', hint: "bubbly and clear, Refreshing" },
      { word: 'CAR', hint: "Goes on four" },
      { word: 'TRAIN', hint: "CHO CHO CHO" },
      { word: 'CHILDREN', hint: "Lovely beasts" }
    ]
    this.state = {
      lettersStatus: this.generateLettersStatuses(),
      score: 100,
      gameFinished: false,
      lettersFound: 0,
      scoreStyle: "scoreGreen",
      solution: this.pickSolution()
    }
  }

  generateLettersStatuses() {
    let lettersStatus = {}
    for (let i = 65; i < 91; i++) {
      lettersStatus[String.fromCharCode(i)] = false
    }
    return lettersStatus
  }

  checkLetter = (letter) => {
    let gameFinished = this.state.gameFinished
    if (!gameFinished) {
      let solutionLetters = this.state.solution.word.split("")
      let score = this.state.score
      let lettersFound = this.state.lettersFound
      if (solutionLetters.includes(letter)) {
        score += 5
        lettersFound++
      } else {
        score -= 20
      }
      this.changeScoreStyle(score)
      let tempLetterStatus = Object.assign({}, this.state.lettersStatus)
      tempLetterStatus[letter] = true
      this.setState({ score: score, lettersStatus: tempLetterStatus, lettersFound: lettersFound })
      this.isGameFinished(score, lettersFound)
    }
  }

  changeScoreStyle(score) {
    let currentScoreStyle = this.state.score
    if (score > 80) {
      currentScoreStyle = "scoreGreen"
    } else if (score >= 50 && score <= 80) {
      currentScoreStyle = "scoreYellow"
    } else {
      currentScoreStyle = "scoreRed"
    }
    this.setState({ scoreStyle: currentScoreStyle })
  }

  isGameFinished(score, lettersFound) {
    let solutionLetters = this.state.solution.word.split("")
    let gameFinished = false
    if (lettersFound >= solutionLetters.length) {
      alert("Game Won")
      gameFinished = true
    } else if (score <= 0) {
      alert("Game Lost")
      gameFinished = true
    }
    if (gameFinished) {
      this.setState({ gameFinished: true })
      let startNewGame = false
      startNewGame = window.confirm("Start New Game")
      if (startNewGame) {
        this.startNewGame()
      }
    }
  }

  startNewGame = () => {
    let newLettersStatus = this.generateLettersStatuses()
    let newSolution = this.pickSolution()
    this.setState({
      lettersStatus: newLettersStatus,
      solution: newSolution,
      score: 100,
      gameFinished: false,
      lettersFound: 0,
      scoreStyle: "scoreGreen"
    })
  }

  pickSolution = () => {
    let randomSolutionNumer = Math.floor(Math.random() * this.solutions.length)
    let newSolution = { word: this.solutions[randomSolutionNumer].word, hint: this.solutions[randomSolutionNumer].hint }
    return newSolution
  }

  render() {

    let lettersStatus = this.state.lettersStatus
    let solution = this.state.solution
    let score = this.state.score

    return (
      <div className="App">
        <Solution lettersStatus={lettersStatus} solution={solution} />
        <Score score={score} scoreStyle={this.state.scoreStyle} />
        <Letters lettersStatus={lettersStatus} checkLetter={this.checkLetter} />
        <NewGame startNewGame={this.startNewGame} />
      </div>
    )

  }
}

export default App;