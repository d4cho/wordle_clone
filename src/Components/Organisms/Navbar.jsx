import React from 'react';

const Navbar = () => {
    const flexContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 25px',
        borderBottom: '1px solid grey',
    };

    const flexStyle = {
        display: 'flex',
    };

    const title = {
        fontSize: 30,
        fontWeight: 'bold',
    };

    return (
        <div style={flexContainer}>
            <div style={flexStyle}>
                <div>=</div>
                <div>?</div>
            </div>
            <div style={title}>Wordle</div>
            <div style={flexStyle}>
                <div>stats</div>
                <div>settings</div>
            </div>
        </div>
    );
};

export default Navbar;
