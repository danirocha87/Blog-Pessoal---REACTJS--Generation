import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <div style={{minHeight: '100vh'}}> /* aqui eu coloco o tamanho que vai ocupar na minha tela*/
          <Route path="/"> /* aqui é para caso o usuario acesse exatamente a barra vai direcionar para o login*/
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">/* aqui é para caso o usuario acesse a barra de login vai direcionar*/
            <Login />
          </Route>
        </div>
      </Routes>
      
      <Footer />
    </Router>

  );
}

export default App;