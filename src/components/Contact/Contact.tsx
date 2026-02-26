import { useState } from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend or service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title}>Get In Touch</h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you have any questions or
              if you'd like to collaborate.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.method}>
                <span className={styles.icon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:nguyenquangdung2309@gmail.com">
                    nguyenquangdung2309@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.method}>
                <span className={styles.icon}>📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+84931802917">+84 931 802 917</a>
                </div>
              </div>

              <div className={styles.method}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project subject"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>

            {submitted && (
              <p className={styles.successMessage}>
                Thank you! I'll get back to you as soon as possible.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
