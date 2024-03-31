import Audit from "./components/Audit"
import Essential from "./components/Essential"
import Feature from "./components/Feature"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimony from "./components/Testimony"

const App = () => {
  return (
    <div className=" relative">
      <Header/>
      <Hero/>
      <Feature/>
      <Essential/>
      <Audit/>
      <Testimony/>
    </div>
  )
}

export default App
