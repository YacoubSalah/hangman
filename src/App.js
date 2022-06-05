import './App.css';
import Solution from './components/Solution.js'
import Score from './components/Score.js'
import Letters from './components/Letters';
import Letter from './components/Letter';

function App() {

  return (
    <div className="App">
      <Solution />
      <Score />
      <Letters />
      <Letter letter="a" />
    </div>
  )

}

export default App;
