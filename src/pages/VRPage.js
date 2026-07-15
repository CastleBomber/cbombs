import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import capstone1 from "../images/capstone-page/capstone-poster.jpg";
import Footer from '../components/Footer';
import HeaderDivider from '../components/HeaderDivider';

const vrProjects = [
    {
        title: 'Angels and Dragons',
        label: 'VR Music Festival',
        description: 'A VR Music Festival hoping to inspire good and light into the world.',
        type: 'video',
        embedUrl: 'https://www.youtube.com/embed/skoAmfKflfQ?si=dJPrcA7NXFgXCvBi',
    },
    {
        title: "Heaven's Gate",
        label: 'Capstone Project',
        description: 'A VR fantasy experience of climbing the stairs to heaven.',
        type: 'poster',
        image: capstone1,
        imageAlt: "Heaven's Gate capstone poster",
    },
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
                    Immersive fantasy spaces built around light, flight, and music
                </p>
            </header>

            <main className="vr-gallery">
                {vrProjects.map((project) => (
                    <article className="vr-project" key={project.title}>
                        <div className="vr-project-media">
                            {project.type === 'video' ? (
                                <div className="vr-video-frame">
                                    <iframe
                                        src={project.embedUrl}
                                        title={`${project.title} VR project video`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="vr-poster-frame">
                                    <img src={project.image} alt={project.imageAlt} />
                                </div>
                            )}
                        </div>

                        <div className="vr-project-copy">
                            <h2>{project.title}</h2>
                            <p className="vr-project-label">{project.label}</p>
                            <p className="vr-project-description">{project.description}</p>
                        </div>
                    </article>
                ))}
            </main>

            <Footer />
        </div>
    );
}
