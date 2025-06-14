import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './Principal.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Contenido from './Contenido.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Principal />
      <Menu />
      <Contenido />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
