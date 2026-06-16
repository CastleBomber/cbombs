import { FaGithub } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';
import pixelAngel from 'images/pixel-animations/pixel-angel.gif';
import pixelDragon from 'images/pixel-animations/pixel-dragon.gif';
//import stockPrices from "images/ai-page/mastra-spy-prices-1.png";
//import stockNews from "images/ai-page/mastra-gold-news-2.png";
import frames1 from "@/images/frames-ai-page/man-1.png";
import frames2 from "@/images/frames-ai-page/man-1.png";
import stockWorkflows from "images/ai-page/mastra-spy-workflow-3.png";


export default function AIPage() {
    const slides = [
        {
            img: frames1,
            alt: "Frames 1",
            title: "[Frames AI]",
            text: "x"
        },
        {
            img: frames2,
            alt: "Frames 2",
            title: "[Frames AI]",
            text: "y"
        }
    ];

    return (
        <div className="web-page">
            <header>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                    <h1>AI Projects</h1>
                    <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                </div>
            </header>

            <main>
                <h1>Frames AI</h1>
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
                    { href: "https://github.com/CastleBomber/stocks-ai", icon: <FaGithub />, label: "GitHub" }
                ]}
            />
        </div>
    );
}


