import flyingDragon from '../images/pixel-animations/purple-dragon-transparent.gif';

export default function Contact() {
    return (
        <div className="web-page contact-page">
            <header className="contact-hero">
                <h1>Contact</h1>
                <p>
                    If you'd like to collaborate on projects,<br />
                    feel free to send a message.
                </p>
            </header>

            <main className="contact-main">
                <section className="contact-panel" aria-labelledby="contact-form-title">
                    <div className="contact-copy">
                        <p className="contact-kicker">Connect</p>
                        <h2 id="contact-form-title">Send a Message</h2>
                    </div>

                    <form
                        className="contact-form"
                        action="mailto:cbombs@cbombs.com"
                        method="post"
                        encType="text/plain"
                    >
                        <label>
                            <span>Company website</span>
                            <input type="url" name="companyWebsite" placeholder="https://example.com" />
                        </label>

                        <label>
                            <span>Name</span>
                            <input type="text" name="name" autoComplete="name" required />
                        </label>

                        <label>
                            <span>Email</span>
                            <input type="email" name="email" autoComplete="email" required />
                        </label>

                        <label>
                            <span>Message</span>
                            <textarea name="message" rows="6" required />
                        </label>

                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>

            <footer className="contact-footer-dragon animation-flight-footer" aria-label="Flying dragon animation">
                <div className="animation-flight-path" aria-hidden="true">
                    <img src={flyingDragon} alt="" className="animation-footer-dragon" />
                </div>
            </footer>
        </div>
    );
}
