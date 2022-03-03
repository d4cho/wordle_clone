import './App.css';
import Navbar from './Components/Organisms/Navbar';
import WordGrid from './Components/Organisms/WordGrid';
import KeyboardLayout from './Components/Organisms/KeyboardLayout';

function App() {
    return (
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
    );
}

export default App;
