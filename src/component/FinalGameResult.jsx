import React from 'react';
import './FinalGameResult.css';

export default function FinalGameResult({ result, setStartAgain }) {

    function startGame() {
        setStartAgain({
            isGameFinished: false,
            isUserWon: false
        });
    }

    return (
        <div className='final-game-result'>

            {result ?
                <div className='won'> You won !!!</div> :
                <div className='game-over'> GameOver !!! Robot won! </div>
            }

            <button onClick={startGame}>Try again</button>
        </div>
    )
}
