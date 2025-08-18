import './App.css';
import headerXL from './assets/pics/header-xl.jpg';
import headerLG from './assets/pics/header-lg.jpg';
import headerL from './assets/pics/header-l.jpg';
import headerMD from './assets/pics/header-md.jpg';
import headerS from './assets/pics/header-s.jpg';
import ritaImage from './assets/pics/rita.jpg';
import aboutBg from './assets/pics/about-bg.jpg';
import pricesBg from './assets/pics/preise.jpg';

function App() {
    return (
        <div className="app">
            {/* Navigationsleiste fixiert oben */}
            <nav className="nav">
                <a href="#home">HOME</a>
                <a href="#about">ÜBER MICH</a>
                <a href="#prices">TERMINE & PREISE</a>
                <a href="#contact">KONTAKT</a>
            </nav>

            <section id="header" className="header-section">
                <picture>
                    <source media="(min-width: 1920px)" srcSet={headerXL} />
                    <source media="(min-width: 1400px)" srcSet={headerLG} />
                    <source media="(min-width: 1024px)" srcSet={headerL} />
                    <source media="(min-width: 768px)" srcSet={headerMD} />
                    <img src={headerS} alt="Header" className="header-image" />
                </picture>
            </section>

            {/* Sektion: Home */}
            <section id="home" className="home-section">
                <div className="home-overlay">
                    <div className="home1">
                        <div className="home-intro-text">
                            <h2>„Wege entstehen, indem man sie geht“</h2>
                            <h3>
                                Wenn Du Dich selbst besser kennen lernen willst, können wir über einen
                                gemeinsamen Weg step by step eine Vision für Dich erarbeiten.
                            </h3>
                            <h1>
                                Ich kann Dir helfen, wenn folgende oder andere Probleme Deinen Alltag
                                belasten
                            </h1>
                        </div>

                        {/* Problem-Listen */}
                        <div className="problem-list">
                            <div className="column">
                                <ul>
                                    <li>Schlafstörungen</li>
                                    <li>Prüfungsangst</li>
                                    <li>Neue berufliche Orientierung</li>
                                    <li>Unerfüllter Kinderwunsch</li>
                                    <li>Partnerschaft, Autonomie und Nähe. Wie komme ich klar?</li>
                                    <li>Wie gestalte ich ein erfülltes Leben nach einer Trennung?</li>
                                </ul>
                            </div>

                            <div className="column">
                                <ul>
                                    <li>Allgemeiner Stress im Leben</li>
                                    <li>Körperliche Verspannungen</li>
                                    <li>Depressive Verstimmungen</li>
                                    <li>Kraftlosigkeit, Energieverlust</li>
                                    <li>Schamanische Hausreinigung</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sektion: About */}
            <section
                id="about"
                className="about-section"
                style={{
                    backgroundImage: `url(${aboutBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center center",
                }}>
                <div className="about-overlay">
                    <div className="about-image-wrapper">
                        <img src={ritaImage} alt="Rita Rist" className="about-image" />
                    </div>
                    <div className="about-intro">
                        <h2>
                            Ich bin Rita und gemeinsam<br />
                            können wir für Dich neue Perspektiven entwickeln.
                        </h2>
                        <p>
                            In meiner Praxis berate ich Dich mit meinen umfassenden Kenntnissen aus dem therapeutischen,
                            heilerischen und naturheilkundlichen Bereich, die ich durch verschiedene Ausbildungen
                            (siehe vita) gewonnen habe, auf Deinem Weg in ein gesünderes, erfüllteres, zufriedeneres Leben.
                        </p>
                    </div>
                    <div className='highlight-about'><p><span className='highlighted-text-about'>
                        Um Dich zu stärken, um Dich zu motivieren
                        damit Du Dich und Deine Bedürfnisse verstehen
                        und Deine Ziele umsetzen kannst.
                    </span></p></div>
                </div>
                <br />
                <br />
                <div className="about-overlay-qualifications">
                    <div className="about-qualifications">
                        <span className="highlighted-text-qualifications">Auf folgenden Stationen meines Lebens<br />konnte und durfte ich mein heutiges Wissen erreichen</span>
                        <ul>
                            <li>Studium der Sozialpädagogik in Reutlingen</li>
                            <li>Ausbildung zur Systemischen Paar- und Familientherapeutin beim IFW München (Institut für Fort-und Weiterbildung), langjährige Praxiserfahrung</li>
                            <li>Ausbildung zur Heilpraktikerin (ohne Amtsarztprüfung) am ZNH in Kempten</li>
                            <li>Erfahrung in der Aufstellungsarbeit u.a. bei Lakotamedizinmann Tacansina Oyata</li>
                            <li>2. Grad Reiki</li>
                            <li>Ausbildung zur schamanischen Heilerin bei Reinhard Stengel („Rainbowman“) an der Akademie für Seelenschamanismus.
                                Reinhard Stengel vermittelt Lehrihnhalte und Heilweisen der nordamerikanischen Indianer und Bruno Grönings (Geistheilung)</li>
                            <li>Erlernen von unterschiedlichen Entspannungsverfahren (Autogenes Training, Progressive Muskelrelaxation)
                                und fernöstlichen Meditationstechniken, sowie Traumaarbeit</li>
                            <li>Langjährige Berufserfahrung mit traumatisierten Jugendlichen und Erwachsenen</li>
                            <li>Derzeit in Ausbildung bei Ralph Riedel, in die Tradition der Inka und Schwarzfuß-Indianer</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sektion: Preise */}
            <section id="prices" className="prices-section" style={{
                backgroundImage: `url(${pricesBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
            }}>
                <div className="prices-overlay">
                    <div className="prices-header">
                        <div className="prices-block">
                            <p>
                                <span className="highlighted-text-prices">Schamanische Heilarbeit unterstützt dich,</span> mit deinen Selbsteheilungskräften in Kontakt zu kommen und vermittelt Techniken zur Heilung und Selbstheilung
                                (Meditation, Krafttierreisen), die individuell auf Dich zugeschnitten werden. Durch Lösen von Energieblockaden heben sich negative Energien auf.
                                Psychische und physische Belastungen uns Symptome lösen sich und verschwinden aus Deinem System, so dass Deine Lebensenergie und Kreativität wieder frei
                                fließen können.
                            </p>
                            <p>
                                Die Behandlungen können in Präsenz in <b>München</b> oder als <b>Fernbehandlungen</b> durchgeführt werden und sind <b>auch für Tiere geeignet.</b><br />
                                Zuerst führen wir zum Kennenlernen natürlich ein kostenloses Estgespräch durch.
                            </p>
                            <p>
                                <span className="highlighted-text-termine">Termine nach Absprache telefonisch oder per E-Mail<br />
                                    Kosten: 150 Euro Energieausgleich bei Behandlung</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer" id="contact">
                <div className="footer-left">
                    <h3><b>Kontakt</b></h3>
                    <div className="footer-contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <span> 0177 2150910</span>
                    </div>
                    <div className="footer-contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <span> ritarist@googlemail.com</span>
                    </div>
                </div>
                <div className="footer-right">
                    <a href="/agb.pdf" target="_blank" rel="noopener noreferrer">AGB</a>
                    <a href="/datenschutz.pdf" target="_blank" rel="noopener noreferrer">Datenschutz</a>
                </div>
            </footer>
        </div >
    );
}

export default App;
