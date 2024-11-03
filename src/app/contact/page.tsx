import Image from "next/image";
import contact from "../../../public/contact.png";
import Footer from "../component/footer";
import "./globals.css"

export default function Contact() {
  return (
    <section className="contact">
    <div className="main-contact">
      <div className="head">
        <form>
          <h2>Contact Us</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Send</button>
          <p className="pera">Or reach out to directly at:</p>
          <p className="mail">moizqureshi782008@gmail.com</p>
        </form>
      </div>
      <div className="image-head">
        <Image src={contact} alt="Contact Image" width={320} height={550} className="image"/>
      </div>  
    </div>
    <Footer/>
    </section>
  );
}