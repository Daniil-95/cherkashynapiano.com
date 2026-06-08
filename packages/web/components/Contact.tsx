export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label">
              CONTACT
            </div>

            <h2 className="section-title">
              Let's get in touch
            </h2>

            <div className="section-divider"/>

            <p className="contact-text">
              For concert bookings, collaborations, masterclasses,
              festival invitations or media inquiries, feel free
              to get in touch.
            </p>

            <div className="contact-details">
              <a href="mailto:cherkashynairina@gmail.com" className="contact-item">
                cherkashynairina@gmail.com
              </a>

              <div className="contact-item">
                Prague, Czech Republic
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="contact-row">
              <input type="text" name="name" placeholder="Your name"/>

              <input type="email" name="email" placeholder="Your email"/>
            </div>

            <input type="text" name="subject" placeholder="Subject"/>

            <textarea name="message" rows={6} placeholder="Your message"/>

            <button type="submit" className="btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}