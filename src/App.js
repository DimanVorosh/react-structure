import { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import RenderRoutes from 'router/RenderRoutes.js'
import { getCurrentUser } from 'redux/modules/auth/actions'
import { useDispatch } from 'react-redux'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <RenderRoutes />
      </Switch>
    </Router>
  )
}

export default App
