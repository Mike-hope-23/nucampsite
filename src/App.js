import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
