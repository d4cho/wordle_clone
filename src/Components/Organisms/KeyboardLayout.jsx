import React from 'react';
import KeyboardLetter from '../Atoms/KeyboardLetter';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useAppContext } from '../../Context/AppContext';

const KeyboardLayout = () => {
    const { myGuess, setMyGuess, handleEnter } = useAppContext();

    const gridContainer = {
        width: 600,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        rowGap: '10px',
        padding: 10,
    };

    const row1Container = {
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        columnGap: '10px',
    };

    const row2Container = {
        padding: '0 30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        columnGap: '10px',
    };

    const row3Container = {
        display: 'grid',
        gridTemplateColumns: '2fr repeat(7, 1fr) 2fr',
        gridTemplateRows: 'repeat(1, 1fr)',
        columnGap: '10px',
    };

    const item = {
        backgroundColor: '#818384',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '20px 0',
        borderRadius: '5px',
        cursor: 'pointer',
        userSelect: 'none',
    };

    const backspace = {
        backgroundColor: '#818384',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        userSelect: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const onLetterClick = (letter) => {
        if (myGuess.length < 5) {
            let guess = (myGuess + letter).toUpperCase();
            setMyGuess(guess);
        }
    };

    const onBackspaceClick = () => {
        let guess = myGuess.substring(0, myGuess.length - 1);
        setMyGuess(guess);
    };

    return (
        <div>
            <div style={gridContainer}>
                <div style={row1Container}>
                    <KeyboardLetter letter={'q'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'w'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'e'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'r'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'t'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'y'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'u'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'i'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'o'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'p'} onLetterClick={onLetterClick} />
                </div>
                <div style={row2Container}>
                    <KeyboardLetter letter={'a'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'s'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'d'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'f'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'g'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'h'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'j'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'k'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'l'} onLetterClick={onLetterClick} />
                </div>
                <div style={row3Container}>
                    <div style={item} onClick={() => handleEnter()}>
                        ENTER
                    </div>
                    <KeyboardLetter letter={'z'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'x'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'c'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'v'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'b'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'n'} onLetterClick={onLetterClick} />
                    <KeyboardLetter letter={'m'} onLetterClick={onLetterClick} />
                    <div style={backspace} onClick={() => onBackspaceClick()}>
                        <BackspaceIcon sx={{ fontSize: 35 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyboardLayout;
