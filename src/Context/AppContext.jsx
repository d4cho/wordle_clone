import React, { createContext, useContext, useEffect, useState } from 'react';
import { useKeyPress } from '../Utils/Hooks';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
    const [wordToGuess, setWordToGuess] = useState('crane');
    const [myGuess, setMyGuess] = useState('');
    const [currentRow, setCurrentRow] = useState(1);
    const [previousGuesses, setPreviousGuesses] = useState([]);

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

    const handleBackspace = () => {
        let guess = myGuess.substring(0, myGuess.length - 1);
        setMyGuess(guess);
    };

    const handleEnter = () => {
        if (myGuess.length === 5 && currentRow < 7) {
            setPreviousGuesses([...previousGuesses, myGuess]);
            setMyGuess('');
            setCurrentRow(currentRow + 1);
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
            }}
        >
            {children}
        </AppContext.Provider>
    );
};