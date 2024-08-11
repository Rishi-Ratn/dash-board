import HomePage from "./pages/HomePage"
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import KidDashboard from "./components/KidDashboard"
import ProgressSummary from "./components/ProgressSummary"
import DetailedReports from "./components/DetailedReports"

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kid-dashboard/:id" element={<KidDashboard />} >
          <Route path="progress-summary" element={<ProgressSummary />} />
          <Route path="detailed-reports" element={<DetailedReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
