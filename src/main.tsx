import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '@/components/Layout'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/routes'
import '@/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
