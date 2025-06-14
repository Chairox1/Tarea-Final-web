import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Principal from './Principal.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import MainContent from './MainContent.jsx'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <div style={{
        paddingTop: "110px",   
        paddingBottom: "50px", 
        minHeight: "100vh",
        boxSizing: "border-box",
        overflowY: "auto"
      }}>
        <MainContent />
      </div>

      <Principal />
      <Menu />
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
