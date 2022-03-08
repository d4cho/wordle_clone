import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

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

    const iconStyle = {
        cursor: 'pointer',
    };

    return (
        <div style={flexContainer}>
            <div style={flexStyle}>
                <MenuIcon sx={iconStyle} />
                <div style={{ width: 10 }} />
                <HelpOutlineOutlinedIcon sx={iconStyle} />
            </div>
            <div style={title}>Wordle</div>
            <div style={flexStyle}>
                <LeaderboardOutlinedIcon sx={iconStyle} />
                <div style={{ width: 10 }} />
                <SettingsIcon sx={iconStyle} />
            </div>
        </div>
    );
};

export default Navbar;
