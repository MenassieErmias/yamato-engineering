import Form from 'next/form'

const ContactUs = () => {
  return (
    <section className="contact-us">
      <hr />
      <h2 className="contact-us-heading">
        Send us a message.
      </h2>

      <div className="contact-us-container">
        <Form className="contact-form">
          <input
            className='contact-form-input'
            name="Name"
            placeholder="Name"
          />
          <input
            className='contact-form-input'
            type="email"
            name="email"
            id="email"
            placeholder='E-mail'
          />
          <input
            className='contact-form-input' type="tel" name="phone" id="phone" placeholder='Phone Number' />
          <textarea
            className='contact-form-textarea'
            name="message" id="message" placeholder='Message ...'></textarea>
          <button className='contact-form-btn' type="submit">
            Send Message
          </button>
        </Form>
      </div>
    </section>
  )
}

export default ContactUs