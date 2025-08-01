import { FaYoutube } from 'react-icons/fa';

export default function Animations() {
    return (
        <div className="page-animations">
            <header>
                <h1>Animation Projects</h1>
            </header>

            <main>
                <div className='video-container'>
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/FTwJMREWtgM?si=BFrsR9MY46AhpSFG" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <h2>  [Dance Battle]  </h2>
                <p>A battle with the king dragon to save the moon</p>

                <div className='video-container'>
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/Z1V8u2KOXhs?si=Zm9I-yMSwpTuaSWd" title="YouTube video player" f
                        rameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <h2>  [Attack On Dragon's Gate]  </h2>
                <p>Our hero's quest to save the moon begins</p>
            </main>

            <footer className="social-footer">
                <a href="https://youtube.com/@CastleBomber" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                </a>
            </footer>
        </div>
    );
}
