import { Routes as AppRoutes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import NotFound from '@/pages/NotFound'

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </AppRoutes>
  )
}

export default Routes
