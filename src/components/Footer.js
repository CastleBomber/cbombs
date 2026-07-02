import flyingDragon from '../images/pixel-animations/purple-dragon-transparent.gif';

export default function Footer() {
    return (
        <footer className="animation-flight-footer" aria-label="Flying dragon animation">
            <div className="animation-flight-path" aria-hidden="true">
                <img src={flyingDragon} alt="" className="animation-footer-dragon" />
            </div>
        </footer>
    );
}
