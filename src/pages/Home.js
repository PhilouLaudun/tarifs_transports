import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      {/*page principale */}
      <div className="page">
        {/*composants : logo, navigation*/}
        <div className="headerPage">
          <Header />
        </div>
        {/*Image de fond */}

        {/*Contenu de la page */}
        <div className="page-main">
          <div className="homeContent">
            <img
              src="../assets/img/camion.jpg"
              alt="Camion"
              className="photocamion"
            />
            <h1 className="hometitre">L’ Outil de Business intelligent propriétaire</h1>
            <h2 className="hometexte">:
              Tarifs-Transports vous propose de calculer de façon simple les
              prix de revient des transports et de gérer ainsi leurs tarifs tout
              en restant compétitif et rentable. Il permet de répondre
              rapidement aux appels d’offres pour que tous les collaborateurs
              puissent remettre un tarif mais également de préparer facilement
              la révision des tarifs.
            </h2>
          </div>
        </div>
        <div className="footerPage">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
