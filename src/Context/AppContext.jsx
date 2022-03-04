import React, { createContext, useContext, useEffect, useState } from 'react';
import { useKeyPress } from '../Utils/Hooks';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
    const [wordToGuess, setWordToGuess] = useState('crane');
    const [myGuess, setMyGuess] = useState('');
    const [currentGuess, setCurrentGuess] = useState(1);

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
        if (myGuess.length === 5 && currentGuess < 7) {
            setMyGuess('');
            setCurrentGuess(currentGuess + 1);
        }
    };

    const handleAlphabet = () => {
        if (myGuess.length < 5) {
            let guess = myGuess + keyPressed;
            setMyGuess(guess);
        }
    };

    console.log(myGuess);
    console.log(currentGuess);

    return (
        <AppContext.Provider value={{ wordToGuess, setWordToGuess, myGuess, setMyGuess }}>
            {children}
        </AppContext.Provider>
    );
};
