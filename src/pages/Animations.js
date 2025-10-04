import { FaYoutube } from 'react-icons/fa';
import pixelAngel from '../images/pixel-animations/pixel-angel.gif';
import pixelDragon from '../images/pixel-animations/pixel-dragon.gif';
import Footer from '../components/Footer';

export default function Animations() {
    return (
        <div className="page-animations">
            <header>
                <div className="pixel-header-row">
                    <img src={pixelAngel} alt="Pixel Angel" className="pixel-angel" />
                    <h1>Animations</h1>
                    <img src={pixelDragon} alt="Pixel Dragon" className="pixel-dragon" />
                </div>
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
                <p>A battle with the dragon king to save the moon</p>

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

            <Footer
                iconLinks={[
                    { href: "https://youtube.com/@CastleBomber", icon: <FaYoutube />, label: "Youtube" }
                ]}
            />
        </div>
    );
}
