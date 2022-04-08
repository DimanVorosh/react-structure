import { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import RenderRoutes from './router/RenderRoutes'
import { getCurrentUser } from 'redux/modules/auth/actions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <Router>
      <Switch>
        <RenderRoutes />
      </Switch>
    </Router>
  )
}

export default App
