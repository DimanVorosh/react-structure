import logo from 'logo.svg'
import 'App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBars } from 'redux/modules/counter/actions'
// import { getIsLoading } from ' redux/selectors/request'
import { getIsLoading } from 'redux/selectors/request'

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isLoading ? (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            hudsgdsgdslkg sdklg
          </a>
        ) : (
          <p>Loading...</p>
        )}
        <p onClick={() => dispatch(getBars())}>
          Edit <code>0</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
