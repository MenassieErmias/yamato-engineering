import Image from "next/image";

import '@styles/home.css'
const SpecCard = ({ name, imageURL, desc }) => {
  return (
    <div className="card">
      <div className="card-container">
        <Image
          className='card-image'
          src={imageURL}
          alt={name}
          height={100}
          width={100}
        />
        <h3 className="card-heading">{name}</h3>
        <p className="card-desc">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default SpecCard