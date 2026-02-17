import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AnnouncementBanner from '../components/AnnouncementBanner'

function Layout() {
  return (
    <div className="site">
      <AnnouncementBanner />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
