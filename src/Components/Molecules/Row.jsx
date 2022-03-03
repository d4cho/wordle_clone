import React from 'react';
import Box from '../Atoms/Box';

const Row = () => {
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
