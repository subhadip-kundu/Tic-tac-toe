import Grid from "./Components/Grid/Grid"
import './App.css'

function App() {
  return (
    <>
      <Grid numberOfCards={9}/>
      <div className="portfolio">
          <a className="portfolio-link" href="https://subhadipkundu.netlify.app/"> `Visit me`</a>
      </div>
    </>
  )
}

export default App
