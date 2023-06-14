import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
// import { Link } from 'react-router-dom';
import NuovoAnnuncio from "../../NuovoAnnuncio/nuovoAnnuncio";
import AggiungiAzienda from "../../AggiungiAzienda/aggiungiAzienda";

// import Home from '../../Home/home';

// import NuovoAnnuncio from '../NuovoAnnuncio/nuovoAnnuncio';
// import AggiungiAzienda from '../AggiungiAzienda/aggiungiAzienda';
// import NotFoundPage from '../NotFoundPage/notFoundPage';


const NavbarOne = () => {
  const Home = () => <Home />;
  // const Articles = () => <h1>Articles</h1>;
  const Contact = () => <h1>Contact</h1>;
  // const About = () => <h1>About</h1>;

  return (
    <>
      <div
        style={{ backgroundColor: "lightgreen", minHeight: "30vh", width: "100%" }}
      >
        <ReactNavbar
          color="#191919"
          menu={[
            {
              name: "HOME",
              to: "/",
              component: Home
            },
            {
              name: "AggiungiAzienda",
              to: "/AggiungiAzienda",
              component: AggiungiAzienda
            },
            {
              name: "NuovoAnnuncio",
              to: "/NuovoAnnuncio",
              component: NuovoAnnuncio
            },
            {
              name: "Contact",
              to: "/contact",
              component: Contact
            },
          ]}
          social={[
            {
              name: "Linkedin",
              url: "https://www..com/",
              icon: ["fab", "linkedin-in"],
            },
            {
              name: "Facebook",
              url: "https://www..com/",
              icon: ["fab", "facebook-f"],
            },
            {
              name: "Instagram",
              url: "https://www..com/",
              icon: ["fab", "instagram"],
            },
            {
              name: "Twitter",
              url: "http://www..com/",
              icon: ["fab", "twitter"],
            },
          ]}
          sticky
        />
      </div>
    </>
  );
};

export default NavbarOne;
