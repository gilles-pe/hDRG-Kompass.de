import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import HybridDrgPage from './pages/HybridDrgPage'
import PraxisPage from './pages/PraxisPage'
import FachbereichePage from './pages/FachbereichePage'
import KontaktPage from './pages/KontaktPage'
import PartnerAccessPage from './pages/PartnerAccessPage'
import CustomerAccessPage from './pages/CustomerAccessPage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'
import './App.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'hybrid-drg', element: <HybridDrgPage /> },
      { path: 'praxis', element: <PraxisPage /> },
      { path: 'fachbereiche', element: <FachbereichePage /> },
      { path: 'kontakt', element: <KontaktPage /> },
      { path: 'partner-access', element: <PartnerAccessPage /> },
      { path: 'customer-access', element: <CustomerAccessPage /> },
      { path: 'impressum', element: <ImpressumPage /> },
      { path: 'datenschutz', element: <DatenschutzPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
