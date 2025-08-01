import { FaGithub } from 'react-icons/fa';
import capstone1 from "../images/capstone-page/capstone-poster.jpg"

export default function Capstone() {
    return (
        <div className="page-capstone">
            <header>
                <h1>Capstone Project</h1>
            </header>

            <main>
                <img src={capstone1} alt="Capstone Project" className="capstone-project-image"/>
                <h2>  [Heavan's Gate]  </h2>
                <p>VR spiritual fantasy experience seeking emulating  flying into the gates of heaven</p>
            </main>

            <footer className="social-footer">
                <a href="https://github.com/CastleBomber/Heavens-Gate-VR" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
            </footer>
        </div>
    );
}
