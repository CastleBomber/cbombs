import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';
import HeaderDivider from '../components/HeaderDivider';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import crypto1 from "../images/crypto-page/crypto-1.jpg";
import crypto2 from "../images/crypto-page/crypto-2.jpg";
import mongoDB from "../images/crypto-page/mongo-db.jpg";

const slides = [
    {
        img: crypto1,
        alt: "Web3 crypto app home screen",
        label: "Wallet flow",
        title: "[Home Page]",
        text: "A Web3 transaction app for sending crypto, connecting wallet state, and logging activity.",
    },
    {
        img: crypto2,
        alt: "Crypto dashboard transaction view",
        label: "Dashboard",
        title: "[Transaction Dashboard]",
        text: "Pulls each signed-in user's transaction history from the MERN database into a cleaner readout.",
    },
    {
        img: mongoDB,
        alt: "MongoDB database collections",
        label: "Data layer",
        title: "[MongoDB]",
        text: "Stores users, transactions, and goals so account activity can persist across sessions.",
    },
];

const cryptoStats = [
    { value: "Web3", label: "wallet experience" },
    { value: "MERN", label: "full-stack app" },
    { value: "DB", label: "transaction logs" },
];

export default function Crypto() {
    return (
        <div className="web-page crypto-page">
            <header className="crypto-hero">
                <div className="pixel-header-row">
                    <img
                        src={pixelAngel}
                        alt=""
                        className="pixel-angel"
                        aria-hidden="true"
                    />
                    <h1>Crypto Projects</h1>
                    <img
                        src={pixelDragon}
                        alt=""
                        className="pixel-dragon"
                        aria-hidden="true"
                    />
                </div>
                <HeaderDivider />
                <p className="crypto-intro">
                    Web3 interfaces, wallet-connected flows, and persistent transaction data shaped into a full-stack product
                </p>
                <div className="crypto-signal-strip" aria-label="Crypto project highlights">
                    {cryptoStats.map((stat) => (
                        <div className="crypto-signal" key={stat.label}>
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </header>

            <main className="crypto-main">
                <section className="crypto-carousel-shell" aria-label="Crypto project screenshots">
                    <Carousel
                        className="crypto-carousel"
                        interval={30000}
                        indicators
                        controls
                    >
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.title}>
                                <div className="crypto-slide">
                                    <p className="crypto-slide-label">{slide.label}</p>
                                    <div className="crypto-slide-frame">
                                        <img
                                            className="crypto-slide-image d-block"
                                            src={slide.img}
                                            alt={slide.alt}
                                        />
                                    </div>
                                    <div className="crypto-slide-copy">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.text}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>
            </main>

            <Footer />
        </div>
    );
}
