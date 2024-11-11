import Image from "next/image";
import Link from "next/link";

// import PartnerCard from "./PartnerCard";

const Partners = () => {
  const PartnerCard = ({ imageURL, name, URL }) => {
    return (
      <div className="card">
        <div className="card-container">
          <Image
            src={imageURL}
            alt={name}
            height={100}
            width={100}
            className="card-image"
          />
          <h3 className="card-name">
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
      imageURL: '/assets/images/extereme-endeavors.jpg',
      URL: 'https://www.extreme-endeavors.com/'
    },
    {
      name: 'KDH Engineering',
      imageURL: '/assets/images/kdh-engineering.png',
      URL: 'https://www.extreme-endeavors.com/'
    },
  ]

  return (
    <section className="partner">
      <partners className="heading">
        Here are some of the people we worked with.
      </partners>
      <div className="partner-container">
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