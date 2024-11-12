import '@styles/home.css'
const Clients = () => {
  const ClientCard = ({ name }) => {
    return (
      <div className="client-card">
        <div className="client-card-container">
          <h3 className="client-card-heading">
            {name}
          </h3>
          <hr />
          <button className="client-card-btn">
            Learn more
          </button>
        </div>
      </div>
    )
  }

  const clients = [
    {
      name: 'John Smith',
    },
    {
      name: 'Helene Smith',
    }
  ]
  return (
    <section className="clients">
      <hr />
      <h2 className="clients-heading">
        Recent Clients
      </h2>
      <div className="clients-container">
        {
          clients.map((client, index) => (
            <ClientCard name={client.name} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Clients