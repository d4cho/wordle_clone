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
    const [isInvalid, setIsInvalid] = useState(false);
    const [colors, setColors] = useState({
        default: '#818384',
        yellow: '#B59F3B',
        green: '#538D4E',
        dark: '#3A3A3C',
    });

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

        if (myGuess.length < 5) {
            setIsInvalid(true);
            setTimeout(() => {
                setIsInvalid(false);
            }, 1000);
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
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
