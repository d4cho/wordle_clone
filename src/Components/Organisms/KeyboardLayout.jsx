import React from 'react';
import KeyboardLetter from '../Atoms/KeyboardLetter';
import BackspaceIcon from '@mui/icons-material/Backspace';

const KeyboardLayout = () => {
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

    return (
        <div>
            <div style={gridContainer}>
                <div style={row1Container}>
                    <KeyboardLetter letter={'q'} />
                    <KeyboardLetter letter={'w'} />
                    <KeyboardLetter letter={'e'} />
                    <KeyboardLetter letter={'r'} />
                    <KeyboardLetter letter={'t'} />
                    <KeyboardLetter letter={'y'} />
                    <KeyboardLetter letter={'u'} />
                    <KeyboardLetter letter={'i'} />
                    <KeyboardLetter letter={'o'} />
                    <KeyboardLetter letter={'p'} />
                </div>
                <div style={row2Container}>
                    <KeyboardLetter letter={'a'} />
                    <KeyboardLetter letter={'s'} />
                    <KeyboardLetter letter={'d'} />
                    <KeyboardLetter letter={'f'} />
                    <KeyboardLetter letter={'g'} />
                    <KeyboardLetter letter={'h'} />
                    <KeyboardLetter letter={'j'} />
                    <KeyboardLetter letter={'k'} />
                    <KeyboardLetter letter={'l'} />
                </div>
                <div style={row3Container}>
                    <div style={item}>ENTER</div>
                    <KeyboardLetter letter={'z'} />
                    <KeyboardLetter letter={'x'} />
                    <KeyboardLetter letter={'c'} />
                    <KeyboardLetter letter={'v'} />
                    <KeyboardLetter letter={'b'} />
                    <KeyboardLetter letter={'n'} />
                    <KeyboardLetter letter={'m'} />
                    <div style={backspace}>
                        <BackspaceIcon sx={{ fontSize: 35 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyboardLayout;
