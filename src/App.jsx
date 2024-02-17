import Essential from "./components/Essential"
import Feature from "./components/Feature"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className=" relative">
      <Header/>
      <Hero/>
      <Feature/>
      <Essential/>
    </div>
  )
}

export default App
