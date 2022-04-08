import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../router/wrappers/ProtectedRoute'
import { AdminRoute } from '../router/wrappers/AdminRoute'
import routes from 'router/routes'

const RenderRoutes = () => {
  return routes.map((route) => {
    if (route.protected) {
      return (
        <ProtectedRoute
          key={route.path}
          path={route.path}
          component={route.component}
        />
      )
    } else if (route.admin) {
      return (
        <AdminRoute
          key={route.path}
          path={route.path}
          component={route.component}
        />
      )
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          component={(props) => <route.component {...props} />}
          exact
        />
      )
    }
  })
}

export default RenderRoutes
