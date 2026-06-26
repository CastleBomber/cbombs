import { ExternalLink } from 'lucide-react';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import flyingDragon from '../images/pixel-animations/purple-dragon-transparent.gif';

const animationProjects = [
    {
        title: 'Dance Battle',
        description: 'A battle with the dragon king to save the moon.',
        embedUrl: 'https://www.youtube.com/embed/FTwJMREWtgM?rel=0',
        watchUrl: 'https://www.youtube.com/watch?v=FTwJMREWtgM',
    },
    {
        title: "Attack On Dragon's Gate",
        description: "Our hero's quest to save the moon begins.",
        embedUrl: 'https://www.youtube.com/embed/Z1V8u2KOXhs?rel=0',
        watchUrl: 'https://www.youtube.com/watch?v=Z1V8u2KOXhs',
    },
];

export default function Animations() {
    return (
        <div className="web-page animations-page">
            <header className="animations-hero">
                <p className="animations-kicker">CastleBomber animated shorts</p>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="" className="pixel-angel" aria-hidden="true" />
                    <h1>Animation Projects</h1>
                    <img src={pixelDragon} alt="" className="pixel-dragon" aria-hidden="true" />
                </div>
                <p className="animations-intro">
                    Heroes, dragons, and moonlit worlds brought to life one frame at a time.
                </p>
                <div className="animations-hero-rule" aria-hidden="true">
                    <span />
                </div>
            </header>

            <main className="animations-gallery">
                {animationProjects.map((project, index) => (
                    <article className="animation-project" key={project.title}>
                        <div className="animation-project-media">
                            <span className="animation-project-number" aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="animation-video-frame">
                                <iframe
                                    src={project.embedUrl}
                                    title={`${project.title} animated short`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="animation-project-copy">
                            <p className="animation-project-label">Original animated short</p>
                            <h2>{project.title}</h2>
                            <p className="animation-project-description">{project.description}</p>
                            <a
                                className="animation-watch-link"
                                href={project.watchUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Watch on YouTube
                                <ExternalLink size={16} aria-hidden="true" />
                            </a>
                        </div>
                    </article>
                ))}
            </main>

            <footer className="animation-flight-footer" aria-label="Flying dragon animation">
                <div className="animation-flight-path" aria-hidden="true">
                    <img src={flyingDragon} alt="" className="animation-footer-dragon" />
                </div>
            </footer>
        </div>
    );
}
