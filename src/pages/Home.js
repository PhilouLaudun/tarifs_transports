import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      {/*page principale */}
      <div className="home">
        {/*composants : logo, navigation, réseaux sociaux*/}
        <div className="headerHome">
          <Header />
        </div>
        {/*Image de fond */}

        {/*Contenu de la page */}
        <div className="home-main">
          <div className="main-content">
            <h1> Charles CANTIN</h1>
            <h2>Photographe</h2>
          </div>
          <h3>Mariage - Grossesse - Bébé - Famille - Baptême - Couple</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
