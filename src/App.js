import './App.css';
import React from 'react';
import Navbar from './Components/Organisms/Navbar';
import WordGrid from './Components/Organisms/WordGrid';
import KeyboardLayout from './Components/Organisms/KeyboardLayout';
import { AppContextProvider } from './Context/AppContext';

const App = () => {
    return (
        <AppContextProvider>
            <div className='main-container'>
                <section>
                    <Navbar />
                </section>
                <section>
                    <WordGrid />
                </section>
                <section>
                    <KeyboardLayout />
                </section>
            </div>
        </AppContextProvider>
    );
};

export default App;
