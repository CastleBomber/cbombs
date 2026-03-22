import { FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Scroll-linked opacity: each .scroll-section fades based on how much is visible
        const sections = document.querySelectorAll('.scroll-section');
        if (!sections.length) return;

        let ticking = false;

        // Calculate visible ration and apply opacity
        const updateOpacity = () => {
            const viewportHeight = window.innerHeight;
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                const visibleRatio = Math.max(0, Math.min(1, visibleHeight / viewportHeight));
                section.style.opacity = visibleRatio;
            });
            ticking = false;
        };

        // Throttle scroll updates with request AimationFrame
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateOpacity);
                ticking = true;
            }
        };

        // Initial update
        updateOpacity();

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div className="page-home">
            {/* HERO - full viewport, fades in on load, fades out on scroll */}
            <section className="scroll-section">
                <header>
                    <div className="pixel-header-row hero-content" >
                        <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                        <h1 className='special-border'>Welcome!</h1>
                        <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                    </div>
                </header>
            </section>

            {/* MAIN - full viewport, fades in then out on scroll */}
            <section className="scroll-section">
                <main>
                    {/* Video */}
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
                </main>
            </section>

            {/* FOOTER */}
            <section className="scroll-section footer-wrapper">
                <footer>
                    <Footer
                        iconLinks={[
                            { href: "https://github.com/CastleBomber", icon: <FaGithub />, label: "GitHub" },
                            { href: "https://youtube.com/@CastleBomber", icon: <FaYoutube />, label: "YouTube" },
                            { href: "https://tiktok.com/@CastleBomber", icon: <FaTiktok />, label: "TikTok" }
                        ]}
                    />
                </footer>
            </section>
        </div>
    );
}
