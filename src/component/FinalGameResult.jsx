import React from 'react';
import { FaGrinWink,FaGrimace } from "react-icons/fa";
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
                <div className='won'> You won !!!
                <FaGrinWink/>
                </div> :
                <div className='game-over'> GameOver 
                    <FaGrimace/>
                 </div>
            }

            <button className='btn' onClick={startGame}>Try again</button>
        </div>
    )
}
