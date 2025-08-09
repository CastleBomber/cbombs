import { FaGithub } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import capstone1 from "../images/capstone-page/capstone-poster.jpg";
import Footer from '../components/Footer';

export default function Capstone() {
    return (
        <div className="page-capstone">
            <header>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                    <h1>Capstone</h1>
                    <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                </div>
            </header>

            <main>
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
