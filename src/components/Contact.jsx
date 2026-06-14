import { profile } from '../data/profile'
import './Contact.css'

export default function Contact() {
  const { contact, location } = profile

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner reveal">
        <p className="eyebrow">Get in touch</p>
        <h2 className="contact__title">
          Let&rsquo;s create something
          <span> with feeling.</span>
        </h2>
        <p className="contact__sub">
          For commissions, exhibitions, voice work or collaboration — I&rsquo;d
          love to hear from you.
        </p>

        <a className="contact__email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <div className="contact__details">
          <div className="contact__detail">
            <span className="contact__label">Phone</span>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              {contact.phone}
            </a>
          </div>
          <div className="contact__detail">
            <span className="contact__label">Studio</span>
            <span>{location}</span>
          </div>
        </div>

        <div className="contact__socials">
          <a
            href={contact.instagramStudio.url}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
          >
            <span className="contact__social-label">Instagram · Studio</span>
            {contact.instagramStudio.handle}
          </a>
          <a
            href={contact.youtube.url}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
          >
            <span className="contact__social-label">YouTube</span>
            {contact.youtube.handle}
          </a>
          <a
            href={contact.instagramPersonal.url}
            target="_blank"
            rel="noreferrer"
            className="contact__social"
          >
            <span className="contact__social-label">Instagram · Personal</span>
            {contact.instagramPersonal.handle}
          </a>
        </div>
      </div>
    </section>
  )
}
