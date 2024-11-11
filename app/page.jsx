import Hero from '@components/Hero';
import Welcome from '@components/Welcome';
import Specialization from '@components/Specialization';
import Partners from '@components/Partners';
import Clients from '@components/Clients';
import ContactUs from '@components/ContactUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Specialization />
      <Partners />
      <Clients />
      <ContactUs />
    </>
  )
}

export default Home