import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import capstone1 from "../images/capstone-page/capstone-poster.jpg";
import Footer from '../components/Footer';
import HeaderDivider from '../components/HeaderDivider';

const vrStats = [
    { value: "VR", label: "immersive worlds" },
    { value: "Music", label: "festival concept" },
    { value: "Fantasy", label: "spiritual flight" },
];

export default function VRPage() {
    return (
        <div className="web-page vr-page">
            <header className="vr-hero">
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="" className="pixel-angel" aria-hidden="true" />
                    <h1>VR Projects</h1>
                    <img src={pixelDragon} alt="" className="pixel-dragon" aria-hidden="true" />
                </div>
                <HeaderDivider />
                <p className="vr-intro">
                    Immersive fantasy spaces, music-driven worlds, and emotional VR concepts built around light and flight
                </p>
                <div className="vr-signal-strip" aria-label="VR project highlights">
                    {vrStats.map((stat) => (
                        <div className="vr-signal" key={stat.label}>
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </header>

            <main className="vr-main">
                <section className="vr-showcase" aria-label="VR project showcase">
                    <article className="vr-project">
                        <div className="vr-project-media">
                            <div className="vr-video-frame">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/skoAmfKflfQ?si=dJPrcA7NXFgXCvBi"
                                    title="Angels and Dragons VR music festival video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div className="vr-project-copy">
                            <p className="vr-project-label">VR music festival</p>
                            <h2>[Angels and Dragons]</h2>
                            <p>VR music festival concept hoping to inspire good and light through an angelic fantasy world.</p>
                        </div>
                    </article>

                    <article className="vr-project">
                        <div className="vr-project-media">
                            <div className="vr-poster-frame">
                                <img src={capstone1} alt="Heaven's Gate capstone poster" />
                            </div>
                        </div>
                        <div className="vr-project-copy">
                            <p className="vr-project-label">Spiritual fantasy experience</p>
                            <h2>[Heaven's Gate]</h2>
                            <p>VR fantasy experience about the feeling of flying upward into luminous gates and celestial space.</p>
                        </div>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    );
}
