import { Send } from 'lucide-react';
import Footer from '../components/Footer';
import HeaderDivider from '../components/HeaderDivider';

export default function Contact() {
    const messageSent = new URLSearchParams(window.location.search).get('message') === 'sent';

    return (
        <div className="web-page contact-page">
            <header className="contact-page-hero">
                <h1>Contact</h1>
                <HeaderDivider />
            </header>

            <main className="contact-page-main">
                <section className="footer contact-page-contact" aria-labelledby="contact-title">
                    <div className="footer-content contact-page-content">
                        <div className="footer-column footer-left" id="contact">
                            <h3 id="contact-title">Connect</h3>
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
                                <input type="hidden" name="_next" value="https://www.cbombs.com/contact?message=sent#contact" />

                                <div className="contact-field">
                                    <label className="visually-hidden" htmlFor="contact-company">Company website</label>
                                    <input
                                        id="contact-company"
                                        type="url"
                                        name="companyWebsite"
                                        placeholder="Company website"
                                        autoComplete="url"
                                        maxLength="240"
                                    />
                                </div>

                                <div className="contact-honeypot" aria-hidden="true">
                                    <label htmlFor="contact-website-check">Leave this blank</label>
                                    <input
                                        id="contact-website-check"
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
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
