import { FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import Footer from '../components/Footer';

export default function Home() {
  const headerRef = useRef(null);

  useEffect(() => {
    // HERO scroll transform (like hajime-artistes)
    const onScroll = () => {
      if (!headerRef.current) return;

      const scrollY = window.scrollY;
      const fadePoint = 300;

      const progress = Math.min(scrollY / fadePoint, 1);

      headerRef.current.style.transform = `
        translateY(${progress * -120}px)
      `;
      headerRef.current.style.opacity = `${1 - progress}`;
    };

    window.addEventListener('scroll', onScroll);

    // Section reveal
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('show', entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );

    document.querySelectorAll('.scroll-reveal').forEach(el =>
      observer.observe(el)
    );

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page-home">

      {/* HERO */}
      <header ref={headerRef} className="hero">
        <div className="pixel-header-row">
          <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
          <h1 className="special-border">Welcome!</h1>
          <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
        </div>
      </header>

      <main>
        <section className="scroll-section scroll-reveal">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/skoAmfKflfQ?si=dJPrcA7NXFgXCvBi"
              title="YouTube"
              allowFullScreen
            />
          </div>
          <h2>[Angels and Dragons]</h2>
          <p>VR Music Festival hoping to inspire good and light into the world</p>
        </section>
      </main>

      <footer className="scroll-section scroll-reveal">
        <Footer
          iconLinks={[
            { href: "https://github.com/CastleBomber", icon: <FaGithub />, label: "GitHub" },
            { href: "https://youtube.com/@CastleBomber", icon: <FaYoutube />, label: "YouTube" },
            { href: "https://tiktok.com/@CastleBomber", icon: <FaTiktok />, label: "TikTok" }
          ]}
        />
      </footer>

    </div>
  );
}
