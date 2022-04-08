import Login from 'views/Login'
import NotFoundPage from 'views/status/NotFound'

const routes = [
  {
    path: '/login',
    component: Login,
    protected: false,
    admin: false
  }
  // {
  //   path: '*',
  //   component: NotFoundPage,
  //   protected: false,
  //   admin: false
  // }
]

export default routes
