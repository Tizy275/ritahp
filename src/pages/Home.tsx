import "./Home.css";

import headerXL from "../assets/pics/header-xl.jpg";
import headerLG from "../assets/pics/header-lg.jpg";
import headerL from "../assets/pics/header-l.jpg";
import headerMD from "../assets/pics/header-md.jpg";
import headerS from "../assets/pics/header-s.jpg";
import aboutXL from "../assets/pics/about-xl.jpg";
import aboutLG from "../assets/pics/about-lg.jpg";
import aboutL from "../assets/pics/about-l.jpg";
import aboutMD from "../assets/pics/about-md.jpg";
import aboutS from "../assets/pics/about-s.jpg";
import ritaImage from "../assets/pics/rita.jpg";
import moeweXL from "../assets/pics/moewe-xl.jpg";
import moeweLG from "../assets/pics/moewe-lg.jpg";
import moeweL from "../assets/pics/moewe-l.jpg";
import moeweMD from "../assets/pics/moewe-md.jpg";
import moeweS from "../assets/pics/moewe-s.jpg";

export default function Home() {
    return (
        <div className="home-page">
            {/* Header-Bild */}
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
                                Wenn Du Dich selbst besser kennen lernen willst,
                                können wir über einen gemeinsamen Weg step by step eine Vision für Dich erarbeiten
                            </h3>
                            <h1>
                                Ich kann Dir helfen, wenn folgende oder andere Probleme Deinen Alltag
                                belasten
                            </h1>
                        </div>

                        {/* Problem-Listen */}
                        <div className="problem-list">
                            <ul>
                                <li>Schlafstörungen</li>
                                <li>Prüfungsangst</li>
                                <li>Neue berufliche Orientierung</li>
                                <li>Unerfüllter Kinderwunsch</li>
                                <li>Partnerschaft, Autonomie und Nähe. Wie komme ich klar?</li>
                                <li>Wie gestalte ich ein erfülltes Leben nach einer Trennung?</li>
                                <li>Allgemeiner Stress im Leben</li>
                                <li>Körperliche Verspannungen</li>
                                <li>Depressive Verstimmungen</li>
                                <li>Kraftlosigkeit, Energieverlust</li>
                                <li>Reinigung von Fremdenergien u.A. Schamanische Hausreinigung</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sektion: About */}
            <section id="about" className="about-section">
                <picture className="about-bg">
                    <source media="(min-width: 1920px)" srcSet={aboutXL} />
                    <source media="(min-width: 1400px)" srcSet={aboutLG} />
                    <source media="(min-width: 1024px)" srcSet={aboutL} />
                    <source media="(min-width: 768px)" srcSet={aboutMD} />
                    <img src={aboutS} alt="Hintergrund Baum" className="about-bgimage" />
                </picture>

                <div className="about-overlay">
                    <div className="about-image-wrapper">
                        <img src={ritaImage} alt="Rita Rist" className="about-image" />
                    </div>
                    <div className="about-intro">
                        <h2>
                            Ich bin Rita und gemeinsam
                            <br />
                            können wir für Dich neue Perspektiven entwickeln
                        </h2>
                        <p>
                            In meiner Praxis berate ich Dich mit meinen umfassenden Kenntnissen aus dem therapeutischen, heilerischen und naturheilkundlichen Bereich,
                            die ich durch verschiedene Ausbildungen (siehe vita) gewonnen habe, auf Deinem Weg in ein gesünderes, erfüllteres, zufriedeneres Leben.
                        </p>
                    </div>
                    <div className="highlight-about">
                        <p>
                            <span className="highlighted-text-about">
                                Um Dich zu stärken, um Dich zu motivieren damit Du Dich und Deine
                                Bedürfnisse verstehen und Deine Ziele umsetzen kannst.
                            </span>
                        </p>
                    </div>
                </div>

                <br />
                <br />

                <div className="about-overlay-qualifications">
                    <div className="about-qualifications">
                        <span className="highlighted-text-qualifications">
                            Auf folgenden Stationen meines Lebens konnte und durfte ich mein
                            heutiges Wissen erreichen
                        </span>
                        <ul>
                            <li>Studium der Sozialpädagogik in Reutlingen</li>
                            <li>
                                Ausbildung zur Systemischen Paar- und Familientherapeutin beim IFW
                                München (Institut für Fort-und Weiterbildung), langjährige
                                Praxiserfahrung
                            </li>
                            <li>
                                Ausbildung zur Heilpraktikerin (ohne Amtsarztprüfung) am ZNH in
                                Kempten
                            </li>
                            <li>
                                Erfahrung in der Aufstellungsarbeit u.a. bei Lakotamedizinmann
                                Tacansina Oyata
                            </li>
                            <li>2. Grad Reiki</li>
                            <li>
                                Ausbildung zur schamanischen Heilerin bei Reinhard Stengel
                                („Rainbowman“) an der Akademie für Seelenschamanismus.<br/>
                                Reinhard Stengel vermittelt Lehrinhalte und Heilweisen der nordamerikanischen Indianer und Bruno Gröning (Geistheilung)
                            </li>
                            <li>
                                Erlernen von unterschiedlichen Entspannungsverfahren (Autogenes Training, Progressive
                                Muskelrelaxation) und fernöstlichen Meditationstechniken, sowie
                                Traumaarbeit
                            </li>
                            <li>
                                Langjährige Berufserfahrung mit traumatisierten Jugendlichen und
                                Erwachsenen
                            </li>
                            <li>
                                Ausbildung bei Ralph Riedel, in die Tradition der Inka
                                und Schwarzfuß-Indianer
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sektion: Preise */}
            <section id="prices" className="prices-section">
                <picture className="prices-bg">
                    <source media="(min-width: 1920px)" srcSet={moeweXL} />
                    <source media="(min-width: 1400px)" srcSet={moeweLG} />
                    <source media="(min-width: 1024px)" srcSet={moeweL} />
                    <source media="(min-width: 768px)" srcSet={moeweMD} />
                    <img src={moeweS} alt="Hintergrund Möwe" className="prices-image" />
                </picture>

                <div className="prices-overlay">
                    <div className="prices-header">
                        <div className="prices-block">
                            <p>
                                <span className="highlighted-text-prices">
                                    Schamanische Heilarbeit unterstützt dich,&nbsp;
                                </span>
                                mit deinen Selbstheilungskräften in Kontakt zu kommen und vermittelt
                                Techniken zur Heilung und Selbstheilung (Meditation, Krafttierreisen),
                                die individuell auf Dich zugeschnitten werden. Durch Lösen von Energieblockaden 
                                heben sich negative Energien auf.<br/>
                                Psychische und physiche Belastungen und Symptome lösen sich und verschwinden aus 
                                Deinem System, so dass Deine Lebensenergie und deine Kreativität wieder frei fließen können.
                            </p>
                            <p>
                                Die Behandlungen können in Präsenz in <b>München</b> oder als{" "}
                                <b>Fernbehandlungen</b> durchgeführt werden und sind{" "}
                                <b>auch für Tiere geeignet.</b>
                            </p>
                            <p>
                                <span className="highlighted-text-termine">
                                    Termine nach Absprache telefonisch oder per E-Mail
                                    <br />
                                    Kosten: 150 Euro Energieausgleich pro Behandlung
                                    <br />
                                    Kostenfreies Kostenlerngespräch
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
