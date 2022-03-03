import React from 'react';

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

    return (
        <div>
            <div style={gridContainer}>
                <div style={row1Container}>
                    <div style={item}>q</div>
                    <div style={item}>w</div>
                    <div style={item}>e</div>
                    <div style={item}>r</div>
                    <div style={item}>t</div>
                    <div style={item}>y</div>
                    <div style={item}>u</div>
                    <div style={item}>i</div>
                    <div style={item}>o</div>
                    <div style={item}>p</div>
                </div>
                <div style={row2Container}>
                    <div style={item}>a</div>
                    <div style={item}>s</div>
                    <div style={item}>d</div>
                    <div style={item}>f</div>
                    <div style={item}>g</div>
                    <div style={item}>h</div>
                    <div style={item}>j</div>
                    <div style={item}>k</div>
                    <div style={item}>l</div>
                </div>
                <div style={row3Container}>
                    <div style={item}>ENTER</div>
                    <div style={item}>z</div>
                    <div style={item}>x</div>
                    <div style={item}>c</div>
                    <div style={item}>v</div>
                    <div style={item}>b</div>
                    <div style={item}>n</div>
                    <div style={item}>m</div>
                    <div style={item}>{'<=='}</div>
                </div>
            </div>
        </div>
    );
};

export default KeyboardLayout;
