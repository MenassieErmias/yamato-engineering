import Image from "next/image";
import Link from "next/link";

// import PartnerCard from "./PartnerCard";

const Partners = () => {
  const PartnerCard = ({ imageURL, name, URL }) => {
    return (
      <div className="partner-card">
        <div className="partner-card-container">
          <Image
            src={imageURL}
            alt={name}
            height={100}
            width={100}
            className="parter-card-image"
          />
          <h3 className="partner-card-name">
            {name}
          </h3>
          <Link href={URL}>Learn more</Link>
        </div>
      </div>
    )
  }

  const partnerData = [
    {
      name: 'Extreme Endeavors',
      imageURL: '/assets/images/extreme-endeavors-logo.png',
      URL: 'https://www.extreme-endeavors.com/'
    },
    {
      name: 'KDH Engineering',
      imageURL: '/assets/images/kdh-engineering-logo.png',
      URL: 'https://www.extreme-endeavors.com/'
    },
  ]

  return (
    <section className="partners">
      <h1 className="partners-heading">
        Here are some of the people we worked with.
      </h1>
      <div className="partners-container">
        {
          partnerData.map((partner, index) => (
            <PartnerCard key={index} name={partner.name} imageURL={partner.imageURL} URL={partner.URL} />
          ))
        }
      </div>
    </section>
  )
}

export default Partners