import React from 'react';
import Box from '../Atoms/Box';
import { useAppContext } from '../../Context/AppContext';

const Row = (props) => {
    const { rowNum } = props;
    const { isInvalid, myGuess, currentRow, previousGuesses } = useAppContext();

    let word = rowNum === currentRow ? myGuess : previousGuesses[rowNum];

    const row = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        columnGap: '5px',
    };

    return (
        <div className={isInvalid && rowNum === currentRow ? 'shake' : null} style={row}>
            <Box letter={word ? word[0] : null} position={0} rowNum={rowNum} animDelay={'0s'} />
            <Box letter={word ? word[1] : null} position={1} rowNum={rowNum} animDelay={'0.5s'} />
            <Box letter={word ? word[2] : null} position={2} rowNum={rowNum} animDelay={'1s'} />
            <Box letter={word ? word[3] : null} position={3} rowNum={rowNum} animDelay={'1.5s'} />
            <Box letter={word ? word[4] : null} position={4} rowNum={rowNum} animDelay={'2s'} />
        </div>
    );
};

export default Row;
