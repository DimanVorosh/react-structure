import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser, getIsLoadingPrivate } from 'redux/selectors/auth'

export const AdminRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(getUser)
  const isLoading = useSelector(getIsLoadingPrivate)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isLoading) return <></>
        else {
          return user && user.isSuperuser ? (
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
