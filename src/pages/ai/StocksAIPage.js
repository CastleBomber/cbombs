import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';
import HeaderDivider from '../../components/HeaderDivider';
import pixelAngel from 'images/pixel-animations/pixel-angel.gif';
import pixelDragon from 'images/pixel-animations/pixel-dragon.gif';
import stockPrices from "images/ai-page/mastra-spy-prices-1.png";
import stockNews from "images/ai-page/mastra-gold-news-2.png";
import stockWorkflows from "images/ai-page/mastra-spy-workflow-3.png";

const slides = [
    {
        img: stockPrices,
        alt: "SPY price history dashboard",
        label: "Market data view",
        title: "[Stock Price History]",
        text: "Shows current and historical SPY price data in a cleaner signal dashboard.",
    },
    {
        img: stockNews,
        alt: "Gold market news dashboard",
        label: "News signal view",
        title: "[Stock News]",
        text: "Displays the top 5 most recent headlines so the chart has market context.",
    },
    {
        img: stockWorkflows,
        alt: "Stock workflow and all-time-high signal dashboard",
        label: "Mastra workflow",
        title: "[Stock Workflows]",
        text: "Shows how far the ticker is from all-time high using a workflow-driven signal read.",
    },
];

const signalStats = [
    { value: "SPY", label: "price history" },
    { value: "Top 5", label: "fresh headlines" },
    { value: "ATH", label: "distance signal" },
];

export default function AIPage() {
    return (
        <div className="web-page stocks-page">
            <header className="stocks-hero">
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="" className="pixel-angel" aria-hidden="true" />
                    <h1>Stocks AI</h1>
                    <img src={pixelDragon} alt="" className="pixel-dragon" aria-hidden="true" />
                </div>
                <HeaderDivider />
                <p className="stocks-intro">
                    Market data, headlines, and AI workflows shaped into quick signal reads
                </p>
                <div className="stocks-signal-strip" aria-label="Stocks AI highlights">
                    {signalStats.map((stat) => (
                        <div className="stocks-signal" key={stat.label}>
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </header>

            <main className="stocks-main">
                <section className="stocks-carousel-shell" aria-label="Stocks AI dashboard screenshots">
                    <Carousel
                        className="stocks-carousel"
                        interval={30000}
                        indicators
                        controls
                    >
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.title}>
                                <div className="stock-slide">
                                    <p className="stock-slide-label">{slide.label}</p>
                                    <div className="stock-slide-frame">
                                        <img
                                            className="stock-slide-image d-block"
                                            src={slide.img}
                                            alt={slide.alt}
                                        />
                                    </div>
                                    <div className="stock-slide-copy">
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
