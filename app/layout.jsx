import '@styles/globals.css';
import '@styles/footer.css'

import Nav from '@components/Nav';
import Footer from '@components/Footer';


export const metadata = {
  title: 'yamato engineerng',
  description: 'empower the future of water'
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className="app">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout