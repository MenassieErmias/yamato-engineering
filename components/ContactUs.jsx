import Form from 'next/form'

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-us container">
        <Form className="contact-us-form">
          <input className='contact-form-input' name="Name" />
          <button type="submit">
            Send Message
          </button>
        </Form>
      </div>
    </section>
  )
}

export default ContactUs