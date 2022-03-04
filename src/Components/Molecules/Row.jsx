import React from 'react';
import Box from '../Atoms/Box';
import { useAppContext } from '../../Context/AppContext';

const Row = (props) => {
    const { rowNum } = props;
    const { myGuess, currentRow, previousGuesses } = useAppContext();

    let word = rowNum === currentRow ? myGuess : previousGuesses[currentRow - 1];

    console.log(myGuess, currentRow, previousGuesses, word);

    const row = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        columnGap: '5px',
    };

    return (
        <div style={row}>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    );
};

export default Row;
