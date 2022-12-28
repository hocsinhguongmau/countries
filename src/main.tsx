import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '@/components/Layout'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/routes'
import '@/styles/global.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
