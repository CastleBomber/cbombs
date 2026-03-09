import { FaGithub } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import capstone1 from "../images/capstone-page/capstone-poster.jpg";
import Footer from '../components/Footer';

export default function VRPage() {
    return (
        <div className="page-capstone">
            <header>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                    <h1>Virtual Reality</h1>
                    <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                </div>
            </header>

            <main>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/skoAmfKflfQ?si=dJPrcA7NXFgXCvBi"
                        title="YouTube"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <h2>  [Angels and Dragons]  </h2>
                <p>VR Music Festival hoping to inspire good and light into the world</p>

                <img src={capstone1} alt="Capstone Project" className="capstone-project-image" />
                <h2>  [Heavan's Gate]  </h2>
                <p>VR spiritual fantasy experience seeking emulating  flying into the gates of heaven</p>
            </main>

            <Footer
                iconLinks={[
                    { href: "https://github.com/CastleBomber/Heavens-Gate-VR", icon: <FaGithub />, label: "GitHub" }
                ]}
            />
        </div>
    );
}
