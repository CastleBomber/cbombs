import { FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="page-home">
            <header>
                <h1>Welcome!</h1>
                <p>*Website under construction*</p>
            </header>

            <main>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315" 
                        src="https://www.youtube.com/embed/skoAmfKflfQ?si=dJPrcA7NXFgXCvBi" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
                <h2>  [Angels and Dragons]  </h2>
                <p>VR Music Festival hoping to inspire good and light into the world</p>
                <p>If you'd like to collaborate on projects, feel free to send a message</p>
                <p>Email: cbombs@cbombs.com  </p>
            </main>

            <footer className="social-footer">
                <a href="https://github.com/CastleBomber" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://youtube.com/@CastleBomber" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                </a>
                <a href="https://tiktok.com/@CastleBomber" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="social-icon" />
                </a>
            </footer>
        </div>
    );
}
