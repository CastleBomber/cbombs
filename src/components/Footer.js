import { Send } from 'lucide-react';

export default function Footer({ iconLinks, showContact = false }) {
    const messageSent = new URLSearchParams(window.location.search).get('message') === 'sent';

    return (
        <footer className="footer">
            <div className={`footer-content ${showContact ? '' : 'footer-content--right-only'}`}>
                {showContact && (
                    <div className="footer-column footer-left" id="contact">
                    <h3>Connect</h3>
                    <p className="contact-intro">
                        If you'd like to collaborate on projects,<br />
                        feel free to send a message.
                    </p>

                    {messageSent && (
                        <p className="contact-status" role="status">
                            Message sent. Thanks for reaching out.
                        </p>
                    )}

                    <form
                        className="contact-form"
                        action="https://formsubmit.co/cbombs@cbombs.com"
                        method="POST"
                    >
                        <input type="hidden" name="_subject" value="New cbombs.com portfolio message" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value="https://www.cbombs.com/?message=sent#contact" />

                        <div className="contact-honeypot" aria-hidden="true">
                            <label htmlFor="company-website">Company website</label>
                            <input
                                id="company-website"
                                type="text"
                                name="_honey"
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>

                        <div className="contact-field">
                            <label className="visually-hidden" htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                autoComplete="name"
                                maxLength="80"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label className="visually-hidden" htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="email"
                                maxLength="160"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label className="visually-hidden" htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Message"
                                rows="1"
                                maxLength="2000"
                                required
                            />
                        </div>

                        <button className="contact-submit" type="submit">
                            <Send aria-hidden="true" size={15} />
                            Send
                        </button>
                    </form>
                    </div>
                )}
                <div className="footer-column footer-right">
                    <h3>CastleBomber Studios</h3>
                    <p>"Software for all"</p>
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
