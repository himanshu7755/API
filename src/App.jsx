import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Event from './Pages/Event';
function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Event />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
