import './App.css';
import Navbar from './Components/Organisms/Navbar';
import WordGrid from './Components/Organisms/WordGrid';
import KeyboardLayout from './Components/Organisms/KeyboardLayout';
import { AppContextProvider } from './Context/AppContext';

function App() {
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
}

export default App;
