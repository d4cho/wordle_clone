import React from 'react';
import Row from '../Molecules/Row';
import { useAppContext } from '../../Context/AppContext';

const WordGrid = () => {
    const { isInvalid } = useAppContext();
    const container = {
        padding: '180px 0',
        position: 'relative',
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

    const absolute = {
        position: 'absolute',
        top: '7%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        border: '1px solid white',
        padding: '20px 20px',
        borderRadius: '5px',
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    };

    return (
        <div style={container}>
            {isInvalid && (
                <div className='invalid-fade-out' style={absolute}>
                    Not enough letters
                </div>
            )}
            <div style={gridContainer}>
                <Row rowNum={0} />
                <Row rowNum={1} />
                <Row rowNum={2} />
                <Row rowNum={3} />
                <Row rowNum={4} />
                <Row rowNum={5} />
            </div>
        </div>
    );
};

export default WordGrid;
