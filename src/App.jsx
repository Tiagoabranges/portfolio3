import "./app.css";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <main className="master">
        <header style={{ color: "#383939" }}>
          <span className="icons">
            <a href="#">
              <i>
                <FaInstagram
                  style={{ color: "#38c958", height: "50px", width: "20px" }}
                />
              </i>
            </a>
            <a href="#">
              <i>
                <FaLinkedinIn
                  style={{ color: "#38c958", height: "50px", width: "20px" }}
                />
              </i>
            </a>
            <a href="#">
              <i>
                <FaGithub
                  style={{ color: "#38c958", height: "50px", width: "20px" }}
                />
              </i>
            </a>
          </span>
          <div id="han" onClick={toggleMenu}>
            <IoMenuOutline id="han1" />
          </div>
        </header>
        {menuOpen && (
          <div className="mobile-menu" onClick={toggleMenu}>
            <div className="menu-content">
              <a href="#about">Home</a>
              <a href="#about">About</a>
              <a href="#stacks">Stacks</a>
              <a href="#jornada">Jornada</a>
              <a href="#projects">Projects</a>
            </div>
          </div>
        )}
        <section
          id="about"
          className="fullscreen"
          style={{ backgroundColor: "#383939", color: "#aee637" }}
        >
          <div className="container">
            <h1>Desenvolvedor Web </h1>
            <p>
              Apaixonado por criar soluções criativas e funcionais para
              problemas complexos.
            </p>
          </div>
        </section>
        <section
          id="projects"
          className="jornada fullscreen"
          style={{ backgroundColor: "#149c68", color: "#fff" }}
        >
          <h2>Projetos</h2>
          <div className="projects-container">
            <div className="project-card">
              <h3>Projeto 1</h3>
              <p>Descrição do projeto 1.</p>
            </div>
            <div className="project-card">
              <h3>Projeto 2</h3>
              <p>Descrição do projeto 2.</p>
            </div>
            <div className="project-card">
              <h3>Projeto 3</h3>
              <p>Descrição do projeto 3.</p>
            </div>
          </div>
        </section>
        <section
          className="stacks fullscreen"
          style={{ backgroundColor: "#38c958", color: "#fff" }}
        >
          Stacks
        </section>
        <section
          className="jornada fullscreen"
          style={{ backgroundColor: "#aee637", color: "#fff" }}
        >
          jornada
        </section>
        <footer
          className="fullscreen"
          style={{ backgroundColor: "#383939", color: "#fffedb" }}
        >
          fim
        </footer>
      </main>
    </div>
  );
}

export default App;
