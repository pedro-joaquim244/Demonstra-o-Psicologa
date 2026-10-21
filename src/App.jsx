import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import WhatsAppFloat from './components/Shared/WhatsAppFloat';

export default function App() { return <ThemeProvider><Home /><WhatsAppFloat /></ThemeProvider>; }
