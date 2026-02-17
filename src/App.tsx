import { lazy, Suspense } from 'react'
import type { ReactNode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HybridDrgPage = lazy(() => import('./pages/HybridDrgPage'))
const PraxisPage = lazy(() => import('./pages/PraxisPage'))
const FachbereichePage = lazy(() => import('./pages/FachbereichePage'))
const KontaktPage = lazy(() => import('./pages/KontaktPage'))
const PartnerAccessPage = lazy(() => import('./pages/PartnerAccessPage'))
const CustomerAccessPage = lazy(() => import('./pages/CustomerAccessPage'))
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'))
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'))

function RouteFallback() {
  return (
    <div className="page">
      <section className="section">
        <div className="container narrow">
          <p>Inhalte werden geladen ...</p>
        </div>
      </section>
    </div>
  )
}

function withSuspense(node: ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{node}</Suspense>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: 'hybrid-drg', element: withSuspense(<HybridDrgPage />) },
      { path: 'praxis', element: withSuspense(<PraxisPage />) },
      { path: 'fachbereiche', element: withSuspense(<FachbereichePage />) },
      { path: 'kontakt', element: withSuspense(<KontaktPage />) },
      { path: 'partner-access', element: withSuspense(<PartnerAccessPage />) },
      { path: 'customer-access', element: withSuspense(<CustomerAccessPage />) },
      { path: 'impressum', element: withSuspense(<ImpressumPage />) },
      { path: 'datenschutz', element: withSuspense(<DatenschutzPage />) },
      { path: '*', element: withSuspense(<HomePage />) },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
