import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';
import HeaderDivider from '../components/HeaderDivider';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import stockPrices from '../images/ai-page/mastra-spy-prices-1.png';
import stockNews from '../images/ai-page/mastra-gold-news-2.png';
import stockWorkflows from '../images/ai-page/mastra-spy-workflow-3.png';
import framesPortrait from '../images/frames-ai-page/man-1.png';
import framesVariant from '../images/frames-ai-page/man-2.png';

const stockSlides = [
    {
        img: stockPrices,
        alt: 'SPY price history dashboard',
        label: 'Market data view',
        title: 'Stock Price History',
        text: 'Shows current and historical SPY price data in a cleaner signal dashboard.',
    },
    {
        img: stockNews,
        alt: 'Gold market news dashboard',
        label: 'News signal view',
        title: 'Stock News',
        text: 'Displays the top 5 most recent headlines so the chart has market context.',
    },
    {
        img: stockWorkflows,
        alt: 'Stock workflow and all-time-high signal dashboard',
        label: 'Mastra workflow',
        title: 'Stock Workflows',
        text: 'Shows how far the ticker is from all-time high using a workflow-driven signal read.',
    },
];

const frameImages = [
    {
        img: framesPortrait,
        alt: 'Frames AI portrait generation example',
    },
    {
        img: framesVariant,
        alt: 'Frames AI alternate generated portrait example',
    },
];

export default function AIPage() {
    return (
        <div className="web-page ai-page">
            <header className="ai-hero">
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="" className="pixel-angel" aria-hidden="true" />
                    <h1>AI Page</h1>
                    <img src={pixelDragon} alt="" className="pixel-dragon" aria-hidden="true" />
                </div>
                <HeaderDivider />
                <p className="ai-intro">
                    AI workflows for market signals, visual framing, and fast creative direction
                </p>
            </header>

            <main className="ai-gallery">
                <article className="ai-project">
                    <div className="ai-project-media">
                        <div className="ai-carousel-frame">
                            <Carousel
                                className="ai-carousel"
                                interval={30000}
                                indicators
                                controls
                            >
                                {stockSlides.map((slide) => (
                                    <Carousel.Item key={slide.title}>
                                        <div className="ai-stock-slide">
                                            <p className="ai-slide-label">{slide.label}</p>
                                            <img
                                                className="ai-stock-image d-block"
                                                src={slide.img}
                                                alt={slide.alt}
                                            />
                                            <div className="ai-slide-caption">
                                                <h3>{slide.title}</h3>
                                                <p>{slide.text}</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    <div className="ai-project-copy">
                        <h2>Stocks AI</h2>
                        <p className="ai-project-label">Market signal workflows</p>
                        <p className="ai-project-description">
                            Market data, headlines, and workflow-driven reads shaped into quick decision signals.
                        </p>
                    </div>
                </article>

                <article className="ai-project">
                    <div className="ai-project-media">
                        <div className="ai-frames-frame">
                            {frameImages.map((frame) => (
                                <img src={frame.img} alt={frame.alt} key={frame.alt} />
                            ))}
                        </div>
                    </div>

                    <div className="ai-project-copy">
                        <h2>Frames AI</h2>
                        <p className="ai-project-label">Generated visual studies</p>
                        <p className="ai-project-description">
                            AI-assisted visual framing for characters, mood boards, and fast concept exploration.
                        </p>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
