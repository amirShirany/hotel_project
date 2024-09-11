import "./App.css"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header/Header"
import LocationList from "./components/LocationList/LocationList"

const App = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <LocationList />
    </div>
  )
}

export default App
