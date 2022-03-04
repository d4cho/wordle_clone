import React, { useEffect, useState } from 'react';
import Box from '../Atoms/Box';
import { useAppContext } from '../../Context/AppContext';

const Row = (props) => {
    const { rowNum } = props;
    const { keyPressed, myGuess, currentRow, previousGuesses } = useAppContext();
    const [isInvalid, setIsInvalid] = useState(false);

    useEffect(() => {
        if (keyPressed === 'Enter' && myGuess.length < 5) {
            setIsInvalid(true);
            setTimeout(() => {
                setIsInvalid(false);
            }, 500);
        }
    }, [keyPressed]);

    let word = rowNum === currentRow ? myGuess : previousGuesses[rowNum - 1];

    console.log(currentRow);

    const row = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        columnGap: '5px',
    };

    return (
        <div className={isInvalid && rowNum === currentRow ? 'shake' : null} style={row}>
            <Box letter={word ? word[0] : null} />
            <Box letter={word ? word[1] : null} />
            <Box letter={word ? word[2] : null} />
            <Box letter={word ? word[3] : null} />
            <Box letter={word ? word[4] : null} />
        </div>
    );
};

export default Row;
