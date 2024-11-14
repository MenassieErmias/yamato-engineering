import ContactUs from "@components/ContactUs";
import '@styles/home.css';
import '@styles/contact-us.css';

const page = () => {
  return (
    <section className="contact-us-page">
      <ContactUs />
    </section>
  )
}

export default page