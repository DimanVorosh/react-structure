import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser, getIsLoadingPrivate, getIsAuth } from 'redux/selectors/auth'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(getUser)
  const isAuth = useSelector(getIsAuth)
  const isLoading = useSelector(getIsLoadingPrivate)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isLoading) return <></>
        else {
          return user || isAuth ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          )
        }
      }}
    />
  )
}
