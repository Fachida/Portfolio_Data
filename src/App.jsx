import { useEffect } from "react";
import photoFirda from "./assets/photo-firda.png";

function App() {

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =========================
          NAVIGATION
      ========================= */}

      <nav>
        <div className="logo">FK</div>

        <div className="nav-links">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#education">Formation</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section id="hero">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "55px"
            }}
          >

            <div
              className="hero-text"
              style={{
                flex: "0 1 700px"
              }}
            >
              <p className="hero-label">
                PORTFOLIO · DATA
              </p>

              <h1>
                Firdaousse
                <br />
                Karimou
              </h1>

              <h2>
                Data Analyst · Data Scientist
              </h2>

              <p className="hero-description">
                Je transforme les données en analyses,
                visualisations et solutions décisionnelles.
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  className="hero-button"
                >
                  Découvrir mes projets →
                </a>

                <a
                  href="/cv-firdaousse-karimou.pdf"
                  download
                  className="cv-button"
                >
                  Télécharger mon CV ↓
                </a>

                <a
                  href="https://github.com/Fachida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-button icon-button"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* PHOTO */}

            <div
              style={{
                width: "300px",
                height: "390px",
                flex: "0 0 300px",
                overflow: "hidden",
                margin: "0",
                padding: "0",
                border: "none",
                borderRadius: "0",
                boxShadow: "none"
              }}
            >
              <img
                src={photoFirda}
                alt="Firdaousse Karimou"
                style={{
                  display: "block",
                  width: "300px",
                  height: "390px",
                  maxWidth: "300px",
                  maxHeight: "390px",
                  minWidth: "300px",
                  minHeight: "390px",
                  objectFit: "cover",
                  border: "none",
                  borderRadius: "0",
                  boxShadow: "none"
                }}
              />
            </div>

          </div>
        </section>


        {/* =========================
            À PROPOS
        ========================= */}

        <section id="about" className="reveal">
          <p className="section-label">
            À PROPOS
          </p>

          <h2>
            Des données aux
            <br />
            décisions.
          </h2>

          <p className="about-description">
            Étudiante en Statistiques & Sciences des Données
            à l'Université de Montpellier, je m'intéresse à
            l'analyse de données, la modélisation statistique
            et la data visualisation.
          </p>
        </section>


        {/* =========================
            COMPÉTENCES
        ========================= */}

        <section id="skills" className="reveal">
          <p className="section-label">
            EXPERTISE
          </p>

          <h2>
            Mes compétences
          </h2>

          <div className="skills-grid">

            <div className="skill-card">
              <span className="skill-number">01</span>

              <h3>
                Data Analysis
              </h3>

              <p>
                Analyse, nettoyage et exploration
                de données pour identifier des
                tendances et informations utiles.
              </p>

              <div className="skill-tags">
                <span>Python</span>
                <span>R</span>
                <span>SQL</span>
              </div>
            </div>


            <div className="skill-card">
              <span className="skill-number">02</span>

              <h3>
                Data Visualization
              </h3>

              <p>
                Création de visualisations claires
                et de dashboards permettant de
                comprendre rapidement les données.
              </p>

              <div className="skill-tags">
                <span>Power BI</span>
                <span>DAX</span>
                <span>Power Query</span>
              </div>
            </div>


            <div className="skill-card">
              <span className="skill-number">03</span>

              <h3>
                Data Science
              </h3>

              <p>
                Modélisation statistique et
                machine learning appliqués à
                des problématiques concrètes.
              </p>

              <div className="skill-tags">
                <span>Statistics</span>
                <span>Machine Learning</span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================
            PROCESS
        ========================= */}

        <section id="process" className="reveal">

          <p className="section-label">
            MÉTHODE
          </p>

          <h2>
            Comment je travaille
          </h2>

          <div className="process-grid">

            <div className="process-step">
              <span className="process-number">01</span>
              <h3>Comprendre le besoin</h3>
              <p>
                Clarifier la question métier et les
                décisions que les données doivent éclairer
                avant d'ouvrir le moindre notebook.
              </p>
            </div>

            <div className="process-step">
              <span className="process-number">02</span>
              <h3>Explorer & nettoyer</h3>
              <p>
                Collecter, fiabiliser et structurer les
                données pour poser des bases solides
                à l'analyse.
              </p>
            </div>

            <div className="process-step">
              <span className="process-number">03</span>
              <h3>Modéliser & analyser</h3>
              <p>
                Appliquer les méthodes statistiques ou de
                machine learning adaptées, et challenger
                les résultats obtenus.
              </p>
            </div>

            <div className="process-step">
              <span className="process-number">04</span>
              <h3>Restituer</h3>
              <p>
                Traduire les résultats en visualisations
                et recommandations claires, actionnables
                par des non-spécialistes.
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            PROJETS
        ========================= */}

        <section id="projects" className="reveal">

          <p className="section-label">
            MON TRAVAIL
          </p>

          <h2>
            Projets sélectionnés
          </h2>

          <div className="projects-grid">

            {/* PROJET 1 — PLANTNET */}

            <article className="project-card">

              <div className="project-visual project-visual--vision" aria-hidden="true">
                <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <circle className="pv-boundary" cx="150" cy="75" r="52" />
                  <line className="pv-link" x1="96" y1="58" x2="128" y2="70" />
                  <line className="pv-link" x1="128" y1="70" x2="150" y2="52" />
                  <line className="pv-link" x1="150" y1="52" x2="176" y2="66" />
                  <line className="pv-link" x1="176" y1="66" x2="204" y2="60" />
                  <circle className="pv-node pv-node--a" cx="96" cy="58" r="5" />
                  <circle className="pv-node pv-node--a" cx="128" cy="70" r="5" />
                  <circle className="pv-node pv-node--a" cx="150" cy="52" r="6" />
                  <circle className="pv-node pv-node--b" cx="176" cy="66" r="5" />
                  <circle className="pv-node pv-node--b" cx="204" cy="60" r="5" />
                  <circle className="pv-node pv-node--b" cx="188" cy="96" r="5" />
                  <circle className="pv-node pv-node--a" cx="112" cy="98" r="5" />
                  <circle className="pv-node pv-node--b" cx="220" cy="88" r="4" />
                  <circle className="pv-node pv-node--a" cx="80" cy="90" r="4" />
                </svg>
              </div>

              <div className="project-content">

                <div className="project-meta">
                  <span className="project-category">
                    Data Science · Computer Vision
                  </span>

                  <span className="project-index">01</span>
                </div>

                <h3>
                  PlantNet
                </h3>

                <p>
                  Modélisation de la classification de 75 000+
                  espèces végétales sur 5,5 millions d'observations,
                  encadrée par l'INRIA. Comparaison de méthodes de
                  prédiction conforme jusqu'à 95% de précision,
                  travaux liés à une publication ICLR 2025.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Computer Vision</span>
                </div>

                <div className="project-footer">
                  <span className="project-type">
                    Projet Data Science
                  </span>

                  <a
                    href="https://github.com/Mouss1O/Projet_PlantNet_M1_SSD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir le projet
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>

            </article>


            {/* PROJET 2 — HEALTH4EARTH */}

            <article className="project-card">

              <div className="project-visual project-visual--earth" aria-hidden="true">
                <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <circle className="pv-globe" cx="150" cy="75" r="46" />
                  <ellipse className="pv-meridian" cx="150" cy="75" rx="46" ry="18" />
                  <ellipse className="pv-meridian" cx="150" cy="75" rx="20" ry="46" />
                  <line className="pv-equator" x1="104" y1="75" x2="196" y2="75" />
                  <circle className="pv-node pv-node--a" cx="128" cy="56" r="4.5" />
                  <circle className="pv-node pv-node--b" cx="172" cy="94" r="4.5" />
                  <circle className="pv-node pv-node--a" cx="180" cy="52" r="6" />
                  <circle className="pv-node pv-node--b" cx="120" cy="98" r="4" />
                </svg>
              </div>

              <div className="project-content">

                <div className="project-meta">
                  <span className="project-category">
                    Data Engineering · Environnement
                  </span>

                  <span className="project-index">02</span>
                </div>

                <h3>
                  Health4Earth
                </h3>

                <p>
                  Pipeline complet d'ingestion, de nettoyage et
                  d'analyse de données environnementales et
                  sanitaires mondiales (Our World in Data),
                  livré avec CI/CD via GitHub Actions et tests
                  automatisés.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>R</span>
                  <span>Quarto</span>
                </div>

                <div className="project-footer">
                  <span className="project-type">
                    Dashboard interactif
                  </span>

                  <a
                    href="https://github.com/JulienOllier/Health4Earth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir le projet
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>

            </article>


            {/* PROJET 3 — SLITHERLINK */}

            <article className="project-card">

              <div className="project-visual project-visual--puzzle" aria-hidden="true">
                <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <line className="pv-grid" x1="90" y1="35" x2="90" y2="115" />
                  <line className="pv-grid" x1="130" y1="35" x2="130" y2="115" />
                  <line className="pv-grid" x1="170" y1="35" x2="170" y2="115" />
                  <line className="pv-grid" x1="210" y1="35" x2="210" y2="115" />
                  <line className="pv-grid" x1="90" y1="35" x2="210" y2="35" />
                  <line className="pv-grid" x1="90" y1="75" x2="210" y2="75" />
                  <line className="pv-grid" x1="90" y1="115" x2="210" y2="115" />
                  <polyline
                    className="pv-loop"
                    points="90,35 170,35 170,75 210,75 210,115 130,115 130,75 90,75 90,35"
                  />
                  <circle className="pv-node pv-node--a" cx="90" cy="35" r="4" />
                  <circle className="pv-node pv-node--a" cx="170" cy="75" r="4" />
                  <circle className="pv-node pv-node--a" cx="130" cy="115" r="4" />
                </svg>
              </div>

              <div className="project-content">

                <div className="project-meta">
                  <span className="project-category">
                    Recherche Opérationnelle
                  </span>

                  <span className="project-index">03</span>
                </div>

                <h3>
                  Slitherlink
                </h3>

                <p>
                  Modélisation d'un puzzle logique sous forme
                  de programme linéaire en nombres entiers (ILP),
                  avec élimination itérative de sous-boucles par
                  l'algorithme de Benders. Application web
                  interactive avec 3 niveaux de difficulté.
                </p>

                <div className="project-tags">
                  <span>R</span>
                  <span>Shiny</span>
                  <span>lpSolve</span>
                </div>

                <div className="project-footer">
                  <span className="project-type">
                    Solveur interactif
                  </span>

                  <a
                    href="https://github.com/Fachida/Slitherlink-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir le projet
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>

            </article>


            {/* PROJET 4 — POWER BI */}

            <article className="project-card">

              <div className="project-visual project-visual--bi" aria-hidden="true">
                <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <rect className="pv-bar" x="70" y="92" width="20" height="38" rx="4" />
                  <rect className="pv-bar" x="102" y="70" width="20" height="60" rx="4" />
                  <rect className="pv-bar" x="134" y="50" width="20" height="80" rx="4" />
                  <rect className="pv-bar pv-bar--accent" x="166" y="62" width="20" height="68" rx="4" />
                  <rect className="pv-bar" x="198" y="80" width="20" height="50" rx="4" />
                  <polyline className="pv-trend" points="80,84 112,64 144,42 176,56 208,46" />
                  <circle className="pv-marker" cx="176" cy="56" r="4.5" />
                </svg>
              </div>

              <div className="project-content">

                <div className="project-meta">
                  <span className="project-category">
                    Data Analytics · Business Intelligence
                  </span>

                  <span className="project-index">04</span>
                </div>

                <h3>
                  Dashboard Power BI
                </h3>

                <p>
                  Création d'un tableau de bord
                  interactif permettant d'explorer
                  les données, suivre les indicateurs
                  clés et faciliter la prise de décision.
                </p>

                <div className="project-tags">
                  <span>Power BI</span>
                  <span>DAX</span>
                  <span>Power Query</span>
                </div>

                <div className="project-footer">
                  <span className="project-type">
                    Projet Data Analytics
                  </span>

                  <a
                    href="https://github.com/Fachida/Dashboard_powerbi_ventes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir le projet
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =========================
            FORMATION
        ========================= */}

        <section id="education" className="reveal">

          <p className="section-label">
            PARCOURS
          </p>

          <h2>
            Formation
          </h2>

          <div className="education-list">

            <div className="education-item">

              <div>

                <span className="education-year">
                  2025 — Aujourd'hui
                </span>

                <h3>
                  Master Statistiques & Sciences des Données
                </h3>

                <p>
                  Université de Montpellier
                </p>

              </div>

              <span className="education-status">
                M1
              </span>

            </div>

            <div className="education-item">

              <div>

                <span className="education-year">
                  2025
                </span>

                <h3>
                  Licence Mathématiques appliquées
                </h3>

                <p>
                  Aix-Marseille Université
                </p>

              </div>

              <span className="education-status">
                Licence
              </span>

            </div>

            
          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section id="contact" className="reveal">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Construisons quelque chose
            <br />
            de pertinent avec les données.
          </h2>

          <p className="contact-description">
            À la recherche d'un stage de 4 à 6 mois à partir de janvier 2027
            en Data Analyst, Data Science ou statistiques.
            
          </p>

          <div className="contact-info">

            <div className="contact-info-item">
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">firdakarimou2@gmail.com</span>
            </div>

            <div className="contact-info-divider" />

            <div className="contact-info-item">
              <span className="contact-info-label">Téléphone</span>
              <span className="contact-info-value">07 51 19 16 45</span>
            </div>

          </div>

          <a
            href="https://www.linkedin.com/in/firdaousse-karimou-032bb4292"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button contact-button--outline"
          >
            Voir mon LinkedIn ↗
          </a>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <p>
          © 2026 Firdaousse Karimou
        </p>

        <p>
          Data · Statistics · Technology
        </p>

      </footer>
    </>
  );
}

export default App;
