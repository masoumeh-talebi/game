import React, { useState, useEffect } from 'react'
import { FaSmile } from 'react-icons/fa'
import './Home.css'
import FinalGameResult from './FinalGameResult';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const correctWords = [
    'CRUSH', 'FLASH', 'ACUTE', 'BLAZE', 'SCOWL', 'SQUID', 'THRUM', 'AFTER', 'FABLE', 'CHIME', 'TASTE'
];
const robot = [
    'ABOUT', 'ABOVE', 'ACTOR', 'ACUTE', 'ADORE', 'ADILT', 'AFTER', 'AGILE', 'AGREE', 'AISLE', 'ALBUM'
];

function Home() {
    const [word, setWord] = useState([]);
    const [guessedUserWords, setGuessedUserWords] = useState([]);
    const [guessedRobotWords, setGuessedRobotWords] = useState([]);
    const [allGuessedWords, setAllGuessedWords] = useState([]);
    const [robotRemainWords, setRobotRemainWords] = useState(robot.map(x => x));
    const [finalGameResult, setFinalGameResult] = useState({
        isGameFinished: false,
        isUserWon: false
    });

    const handleClick = (letter) => {
        if (word.length < 5) {
            setWord((prev) => [...prev, letter]);
        }
    }

    useEffect(() => {
        if (word.length === 5) {
            setGuessedUserWords(word.join(''));

            if (robotRemainWords.length) {
                const randomIndex = Math.floor(Math.random() * robotRemainWords.length);
                const randomWord = robotRemainWords[randomIndex];
                setGuessedRobotWords(randomWord);
                //remove robot guesses from original array 
                setRobotRemainWords(robotRemainWords.filter(word => word !== randomWord));

                setAllGuessedWords((prev) => [...prev, word.join(''), randomWord]);
            } else {
                setFinalGameResult({
                    isGameFinished: true,
                    isUserWon: false
                });
            }

            setWord([]);
        }

        setFinalGameResult(
            {
                isGameFinished: !!correctWords.find((x) => x === guessedUserWords || x === guessedRobotWords),
                isUserWon: !!correctWords.find((x) => x === guessedUserWords)
            }
        );

    }, [word]);

    function startAgain(res) {
        setFinalGameResult(res);
        setAllGuessedWords([]);
        // guessedRobotWords([]);
        // setGuessedUserWords([]);
    }

    return (
        finalGameResult.isGameFinished ? <FinalGameResult result={finalGameResult.isUserWon} setStartAgain={startAgain} /> :
            <>
                <div className='game-container'>
                    <div>
                        {allGuessedWords.map((x, index) => {
                            return <div key={index} >
                                <div className={correctWords.find((x) => x === guessedUserWords || x === guessedRobotWords) ? 'winStyle' : ''}>{x}</div>
                            </div>
                        })
                        }
                    </div>

                    <div className='game'>
                        <div className='game-input'>
                            <div className='result'>
                                {word.map((item, index) => {
                                    return <h3 key={index}>{item}</h3>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='game-word'>
                        <FaSmile size={50} color='green' />
                        <div className='game-turn'>
                            <span>Your Turn</span>
                        </div>
                        <FaSmile size={50} color='gray' />
                    </div>

                    <div className='game-button'>
                        {letters.map((item, index) =>
                            <button key={index} className='key' onClick={() => handleClick(item)}>
                                <div>
                                    {item}
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </>
    )
}

export default Home
