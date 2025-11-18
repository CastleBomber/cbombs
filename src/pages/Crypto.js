import { FaGithub } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import crypto1 from "../images/crypto-page/crypto-1.jpg";
import crypto2 from "../images/crypto-page/crypto-2.jpg";
import mongoDB from "../images/crypto-page/mongo-db.jpg";
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';


export default function Crypto() {
    const slides = [
        {
            img: crypto1,
            alt: "Web3 Crypto App",
            title: "[Home Page]",
            text: "Web3 crypto app that allows users to send and log crypto transactions"
        },
        {
            img: crypto2,
            alt: "Dashboard",
            title: "[Dashboard]",
            text: "Pulls logged-in user's transactions from the MERN database."
        },
        {
            img: mongoDB,
            alt: "MongoDB",
            title: "[MongoDB]",
            text: "Users, transactions, and goals are stored and accessible with MongoDB."
        }
    ];

    return (
        <div className="page-crypto">
            <header>
                <div className="pixel-header-row">
                    <img
                        src={pixelAngel}
                        alt="Pixel Angel"
                        className="pixel-angel"
                    />
                    <h1>Crytpo</h1>
                    <img
                        src={pixelDragon}
                        alt="Pixel Dragon"
                        className="pixel-dragon"
                    />
                </div>
            </header>

            <main>
                <Carousel
                    className="crypto-carousel"
                    interval={30000}
                    indicators={true}
                    controls={true}
                >
                    {slides.map((slide, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="crypto-project-image d-block w-100"
                                src={slide.img}
                                alt={slide.alt}
                            />
                            {/* Caption outside the image */}
                            <div className="carousel-text-below">
                                <h2>{slide.title}</h2>
                                <p>{slide.text}</p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>


            </main>

            <Footer
                iconLinks={[
                    {
                        href: "https://github.com/CastleBomber/web-pages-unleashed/tree/feature/holesky-testnet",
                        icon: <FaGithub />,
                        label: "GitHub"
                    }
                ]}
            />
        </div>
    );
}
