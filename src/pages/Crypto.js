import { FaGithub } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import crypto1 from "../images/crypto-page/crypto-1.jpg";
import crypto2 from "../images/crypto-page/crypto-2.jpg";
import mongoDB from "../images/crypto-page/mongo-db.jpg";
import Footer from '../components/Footer';


export default function Crypto() {
    return (
        <div className="page-crypto">
            <header>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                    <h1>Crytpo</h1>
                    <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                </div>
            </header>
            <main>
                <img src={crypto1} alt="Web3 Crypto App" className="crypto-project-image" />
                <h2>  [Home Page]  </h2>
                <p>Web3 crypto app that allows users to send and log crypto transactions.</p>

                <img src={crypto2} alt="Dashboard" className="crypto-project-image" />
                <h2>  [Dashboard]   </h2>
                <p>Pulls logged-in user's transactions from the MERN database.</p>

                <img src={mongoDB} alt="MongoDB" className="crypto-project-image" />
                <h2>    [MongoDB]   </h2>
                <p>Users, transactions, and goals are stored and accessible with MongoDB.</p>
            </main>

            <Footer
                iconLinks={[
                    { href:"https://github.com/CastleBomber/web-pages-unleashed/tree/feature/holesky-testnet", icon: <FaGithub />, label: "GitHub" }
                ]}
            />
        </div>
    );
}
