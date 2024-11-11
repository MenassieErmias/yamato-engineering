

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
        <Link href={URL}>{name}</Link>
      </div>
    </div>
  )
}

export default PartnerCard