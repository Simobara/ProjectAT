import React, { useState } from 'react';
import NavbarSeven from "./Components/Navbar/ComponentSeven/NavbarSeven";
import Footer from "./Components/Footer/footer";
import 'font-awesome/css/font-awesome.min.css';
import "./App.css"
import Register from './Login/Register/register';

const App = () => {

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <>
      {isRegistered ? (
        <>
          <NavbarSeven />
          <Footer />
        </>
      ) : (
        <Register onRegistrationSuccess={handleRegistration} />
      )}
    </>
  );
}

export default App;