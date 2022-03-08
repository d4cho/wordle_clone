import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../Context/AppContext';

const Box = (props) => {
    const { letter, position, rowNum } = props;
    const { previousGuesses, wordToGuess, colors } = useAppContext();
    const [bgColor, setBgColor] = useState('default');

    useEffect(() => {
        if (letter === wordToGuess[position]) {
            setBgColor('green');
        } else if (wordToGuess.includes(letter)) {
            setBgColor('yellow');
        } else {
            setBgColor('dark');
        }
    }, [previousGuesses]);

    const container = {
        position: 'relative',
    };

    const absolute = {
        // to center absolute box
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        userSelect: 'none',
        backgroundColor: previousGuesses[rowNum] ? colors[bgColor] : null,

        // to center text in box
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        // for animation
        border: letter ? '2px solid #565758' : '2px solid #3a3a3c',
        width: '100%',
        height: '100%',
    };

    return (
        <div style={container}>
            <div className={letter ? 'letter-entered' : null} style={absolute}>
                {letter}
            </div>
        </div>
    );
};

export default Box;
