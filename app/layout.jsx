import '@styles/globals.css'

export const metadata = {
  title: 'yamato engineerng',
  description: 'empower the future of water'
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout