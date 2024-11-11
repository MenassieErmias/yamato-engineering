import SpecCard from '@components/SpecCard'

const Specialization = () => {

  const specsData = [
    {
      imageURL: '/assets/images/control-boards.png',
      name: 'Control Boards Solutions',
      desc: 'Precision control boards for diverse applications. Customized solutions built with cutting-edge tech for optimized operations and increased efficiency.'
    },
    {
      imageURL: '/assets/images/solar-power.png',
      name: 'Solar Power Solutions',
      desc: 'Harness clean solar energy with our comprehensive solutions. From feasibility studies to installation, we create eco-friendly systems for a greener future.'
    },
    {
      imageURL: '/assets/images/scada.png',
      name: 'SCADA Water Distribution Systems',
      desc: 'Real -time water management with SCADA technology. Gain insights for efficient resource allocation and continuous water supply.'
    },
  ]

  return (
    <section className="specialization">
      <div className="specialization-container">
        <h2 className="specialization-heading">
          We specialize in
        </h2>
        {
          specsData.map((spec, index) => (
            <SpecCard key={index} name={spec.name} imageURL={spec.imageURL} desc={spec.desc} />
          ))
        }
      </div>
    </section>
  )
}

export default Specialization