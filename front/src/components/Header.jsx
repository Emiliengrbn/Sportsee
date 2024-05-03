const logo = require("../assets/logo.png")

function header() {
    return (
      <header className="header">
        <img src={logo} alt="logo SportSee" />
        <p className="nav-item">Accueil</p>
        <p className="nav-item">Profil</p>
        <p className="nav-item">Réglages</p>
        <p className="nav-item">Communauté</p>
      </header>
    );
  };
  
  export default header;
  