
import Image from "next/image";
import '@styles/services.css'
const Services = () => {

  const services = [
    {
      imageURL: '/assets/images/innovative.jpg',
      title: 'Innovative and Customizable Solutions',
      desc: 'We are committed to pushing the boundaries of technology and innovation. Our solutions are highly customizable, allowing us to tailor our services to meet the specific requirements of each client and project.'
    },
    {
      imageURL: '/assets/images/quality-assurance.jpg',
      title: 'Quality Assurance',
      desc: 'Quality is at the core of everything we do. From design to implementation, we adhere to stringent quality assurance measures to ensure that our solutions are reliable, durable, and performance-oriented.'
    },
    {
      imageURL: '/assets/images/expert-team.jpg',
      title: 'Expert Team',
      desc: 'Our team comprises skilled professionals with extensive experience in the respective fields of control boards, solar power, and SCADA water distribution systems. They are dedicated to delivering top-notch solutions that exceed expectations.'
    },
    {
      imageURL: '/assets/images/customer-centric.jpg',
      title: 'Customer-Centric Approach',
      desc: 'At Yamato Engineering plc, our clients are our top priority. We foster strong relationships with our clients and work closely with them to understand their needs, providing exceptional service and support at every stage of the project.'
    }
  ]

  const ServicesCard = ({ imageURL, title, desc }) => {
    return (
      <div className="service-card">
        <div className="service-card-container">
          <Image
            className="service-card-image"
            src={imageURL}
            alt={title}
            height={200}
            width={100}
          />
          <hr />
          <h4 className="service-card-title">
            {title}
          </h4>
          <hr />
          <p className="service-card-desc">
            {desc}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="services">
      <hr />
      <div className="services-container">
        <h2 className="services-heading">
          Why choose Yamato engineering?<br /> We offer,
        </h2>
        {
          services.map((service, index) => (
            <ServicesCard key={index} imageURL={service.imageURL} title={service.title} desc={service.desc} />
          ))
        }
      </div>
    </section>
  )
}

export default Services