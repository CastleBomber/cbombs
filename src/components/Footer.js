export default function Footer({ iconLinks }) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section left-section">
                    <h3>Connect</h3>
                    <p>If you'd like to collaborate on projects,< br />
                        feel free to send a message</p>
                    <p className="footer-email">Email: cbombs@cbombs.com</p>
                </div>
                <div className="footer-section right-section">
                    <h3>CastleBomber <br />Software Studios</h3>
                    <p>"Software for everyone"</p>
                    <div className="social-footer">
                        {iconLinks.map(({ href, icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="social-icon"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
