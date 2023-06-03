import React from 'react';
import { FaGrinWink, FaSadTear } from "react-icons/fa";
import './FinalGameResult.css';

export default function FinalGameResult({ result, setStartAgain }) {

    function startGame(reset) {
        setStartAgain({
            isGameFinished: false,
            isUserWon: false
        });
    }

    return (
        <div className='final-game-result'>

            {result ?
                <div className='won'> You won !!!
                    <FaGrinWink />
                </div> :
                <div className='game-over'> GameOver
                    <FaSadTear />
                </div>
            }

            <button className='btn' onClick={startGame}>Try again</button>
        </div>
    )
}
