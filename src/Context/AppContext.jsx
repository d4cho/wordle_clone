import React, { createContext, useContext, useEffect, useState } from 'react';
import { useKeyPress } from '../Utils/Hooks';
import { words } from '../Assets/words';
import dictionary from '../Assets/dictionary.json';
import { WorkOutlined } from '@mui/icons-material';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
    const [wordToGuess, setWordToGuess] = useState('crane');
    const [myGuess, setMyGuess] = useState('');
    const [currentRow, setCurrentRow] = useState(0);
    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [isInvalid, setIsInvalid] = useState(null);
    const [colors, setColors] = useState({
        default: '#818384',
        yellow: '#B59F3B',
        green: '#538D4E',
        dark: '#3A3A3C',
    });
    const [gameResult, setGameResult] = useState(null);

    const dictionaryWords = Object.keys(dictionary);
    // .filter((word) => word.length === 5 || word.length === 4)
    // .map((word) => {
    //     if (word.length === 4) {
    //         return word + 's';
    //     } else {
    //         return word;
    //     }
    // });

    const keyPressed = useKeyPress();

    useEffect(() => {
        if (keyPressed) {
            if (keyPressed === 'Backspace') {
                handleBackspace();
            } else if (keyPressed === 'Enter') {
                handleEnter();
            } else {
                handleAlphabet();
            }
        }
    }, [keyPressed]);

    useEffect(() => {
        let randomNum = Math.floor(Math.random() * (words.length + 1));
        const newWord = words[randomNum];
        if (newWord) {
            console.log(newWord);
            setWordToGuess(newWord);
        }
    }, []);

    const handleBackspace = () => {
        let guess = myGuess.substring(0, myGuess.length - 1);
        setMyGuess(guess);
    };

    const handleEnter = () => {
        // invalid condition
        if (myGuess.length < 5) {
            setIsInvalid('Not enough letters');
            setTimeout(() => {
                setIsInvalid(null);
            }, 1000);
        } else {
            if (dictionaryWords.includes(myGuess)) {
                if (myGuess.length === 5 && currentRow < 6) {
                    setPreviousGuesses([...previousGuesses, myGuess]);
                    setMyGuess('');
                    setCurrentRow(currentRow + 1);
                }

                // win condition
                if (myGuess.toUpperCase() === wordToGuess.toUpperCase()) {
                    setTimeout(() => {
                        setGameResult('win');
                    }, 4000);
                }

                // lose condition
                if (currentRow === 5 && myGuess.toUpperCase() !== wordToGuess.toUpperCase()) {
                    setTimeout(() => {
                        setGameResult('lose');
                    }, 4000);
                }
            } else {
                setIsInvalid('Not in word list');
                setTimeout(() => {
                    setIsInvalid(null);
                }, 1000);
            }
        }
    };

    const handleAlphabet = () => {
        if (myGuess.length < 5) {
            let guess = myGuess + keyPressed;
            setMyGuess(guess);
        }
    };

    return (
        <AppContext.Provider
            value={{
                wordToGuess,
                setWordToGuess,
                myGuess,
                setMyGuess,
                currentRow,
                setCurrentRow,
                previousGuesses,
                setPreviousGuesses,
                isInvalid,
                colors,
                setColors,
                gameResult,
                setGameResult,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
