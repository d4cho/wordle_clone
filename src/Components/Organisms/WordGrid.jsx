import React from 'react';
import Row from '../Molecules/Row';

const WordGrid = () => {
    const container = {
        border: '1px solid red',
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
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
            </div>
        </div>
    );
};

export default WordGrid;
