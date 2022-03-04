import { useEffect, useState } from 'react';

export const useKeyPress = () => {
    const [keyPressed, setKeyPressed] = useState('');

    const downHandler = (e) => {
        // keyCode:
        // 8 = Backspace
        // 13 = Enter
        // 65 to 90 = alphabets

        if (e.keyCode === 8 || e.keyCode === 13 || (e.keyCode >= 65 && e.keyCode <= 90)) {
            setKeyPressed(e.key);
        }
    };

    const upHandler = () => {
        setKeyPressed('');
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []);

    return keyPressed;
};
