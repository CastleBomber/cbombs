import { FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="page-home">
            <header>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                    <h1>Welcome!</h1>
                    <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                </div>
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
            </main>

            <Footer
                iconLinks={[
                    { href: "https://github.com/CastleBomber", icon: <FaGithub />, label: "GitHub" },
                    { href: "https://youtube.com/@CastleBomber", icon: <FaYoutube />, label: "YouTube" },
                    { href: "https://tiktok.com/@CastleBomber", icon: <FaTiktok />, label: "TikTok" }
                ]}
            />
        </div>
    );
}
