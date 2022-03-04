import React from 'react';
import Row from '../Molecules/Row';

const WordGrid = () => {
    const container = {
        padding: '120px 0',
    };

    const gridContainer = {
        height: '36vh',
        width: '30vh',
        margin: '0 auto',

        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)',
        rowGap: '5px',
    };

    return (
        <div style={container}>
            <div style={gridContainer}>
                <Row rowNum={1} />
                <Row rowNum={2} />
                <Row rowNum={3} />
                <Row rowNum={4} />
                <Row rowNum={5} />
                <Row rowNum={6} />
            </div>
        </div>
    );
};

export default WordGrid;
