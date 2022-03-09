import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useAppContext } from '../../Context/AppContext';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: '#3A3A3C',
    color: '#FFFFFF',
    border: '2px solid #3A3A3C',
    boxShadow: 24,
    padding: '12px 24px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
};

const EndModal = () => {
    const { gameResult, wordToGuess } = useAppContext();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (gameResult) {
            setOpen(true);
        }
    }, [gameResult]);

    const handleClick = () => {
        window.location.reload(true);
    };

    const titleStyle = {
        fontSize: 48,
        fontWeight: 'bold',
    };

    const textStyle = {
        fontSize: 32,
        marginTop: 48,
        marginBottom: 48,
    };

    const closeIcon = {
        alignSelf: 'flex-end',
        cursor: 'pointer',
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#FFFFFF',
        backgroundColor: '#538D4E',
        opacity: 0.8,
        '&:hover': {
            backgroundColor: '#538D4E',
            opacity: 1,
        },
        fontSize: 24,
        fontWeight: 'bold',
    }));

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <div style={closeIcon} onClick={() => handleClick()}>
                    <CloseIcon />
                </div>
                <div style={titleStyle}>{gameResult && gameResult.toUpperCase()}</div>
                <div style={textStyle}>
                    {gameResult === 'win' ? 'Woohoo!' : `The word was ${wordToGuess.toUpperCase()}`}
                </div>
                <ColorButton variant='contained' onClick={() => handleClick()}>
                    Play again
                </ColorButton>
            </Box>
        </Modal>
    );
};

export default EndModal;
