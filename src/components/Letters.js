import { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {

    render() {
        let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

        return (
            <div>
            {letters.map( l => <Letter letter={l}/>)}
            </div>
        )
        
    }

}

export default Letters