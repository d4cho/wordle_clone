import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';

const KeyboardLetter = (props) => {
    const { letter } = props;
    const { previousGuesses, wordToGuess, colors } = useAppContext();
    const [bgColor, setBgColor] = useState('default');

    useEffect(() => {
        for (const word of previousGuesses) {
            for (let i = 0; i < word.length; i++) {
                const letterToCheck = word[i];

                // if letter is already green, don't check and change color
                if (bgColor !== 'green') {
                    // only check and change letter of component
                    if (letter.toUpperCase() === letterToCheck.toUpperCase()) {
                        if (wordToGuess.toUpperCase().includes(letterToCheck.toUpperCase())) {
                            if (
                                wordToGuess.toUpperCase().indexOf(letterToCheck.toUpperCase()) === i
                            ) {
                                setBgColor('green');
                            } else {
                                setBgColor('yellow');
                            }
                        } else {
                            setBgColor('dark');
                        }
                    }
                }
            }
        }
    }, [previousGuesses]);

    const itemStyle = {
        backgroundColor: colors[bgColor],
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '20px 0',
        borderRadius: '5px',
        cursor: 'pointer',
        userSelect: 'none',
    };
    return <div style={itemStyle}>{letter}</div>;
};

export default KeyboardLetter;
