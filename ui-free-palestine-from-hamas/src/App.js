import logo from './logo.svg';
import './App.css';
import MainPage from 'components/MainPage';
import { LanguageProvider } from 'contexts/language';

function App() {
    return (
        <div>
            <LanguageProvider>
                <MainPage />
            </LanguageProvider>
        </div>
    );
}

export default App;
