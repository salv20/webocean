import Audit from "./components/Audit"
import Essential from "./components/Essential"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import News from "./components/News"
import Overview from "./components/Overview"
import Subscribe from "./components/Subscribe"
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
      <Subscribe/>
      <News/>
      <Overview/>
      <Footer/>
    </div>
  )
}

export default App
