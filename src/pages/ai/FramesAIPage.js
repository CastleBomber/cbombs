import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';
import HeaderDivider from '../../components/HeaderDivider';
import pixelAngel from 'images/pixel-animations/pixel-angel.gif';
import pixelDragon from 'images/pixel-animations/pixel-dragon.gif';
import framesPortrait from '@/images/frames-ai-page/man-1.png';
import framesVariant from '@/images/frames-ai-page/man-2.png';

const slides = [
    {
        img: framesPortrait,
        alt: "Frames AI portrait generation example",
        label: "Portrait frame",
        title: "[Prompted Portraits]",
        text: "Turns character direction into a polished visual frame with a clean portrait-style finish.",
    },
    {
        img: framesVariant,
        alt: "Frames AI alternate generated portrait example",
        label: "Variant frame",
        title: "[Visual Variations]",
        text: "Explores alternate looks from the same creative lane so a concept can evolve without losing its mood.",
    },
];

const frameStats = [
    { value: "2", label: "visual studies" },
    { value: "512px", label: "frame outputs" },
    { value: "AI", label: "concept direction" },
];

export default function FramesAIPage() {
    return (
        <div className="web-page frames-page">
            <header className="frames-hero">
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="" className="pixel-angel" aria-hidden="true" />
                    <h1>Frames AI</h1>
                    <img src={pixelDragon} alt="" className="pixel-dragon" aria-hidden="true" />
                </div>
                <HeaderDivider />
                <p className="frames-intro">
                    AI-assisted visual framing for characters, mood boards, and fast creative direction
                </p>
                <div className="frames-signal-strip" aria-label="Frames AI highlights">
                    {frameStats.map((stat) => (
                        <div className="frames-signal" key={stat.label}>
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </header>

            <main className="frames-main">
                <section className="frames-carousel-shell" aria-label="Frames AI generated image examples">
                    <Carousel
                        className="frames-carousel"
                        interval={30000}
                        indicators
                        controls
                    >
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.title}>
                                <div className="frames-slide">
                                    <p className="frames-slide-label">{slide.label}</p>
                                    <div className="frames-slide-layout">
                                        <div className="frames-slide-frame">
                                            <img
                                                className="frames-slide-image d-block"
                                                src={slide.img}
                                                alt={slide.alt}
                                            />
                                        </div>
                                        <div className="frames-slide-copy">
                                            <h2>{slide.title}</h2>
                                            <p>{slide.text}</p>
                                        </div>
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
