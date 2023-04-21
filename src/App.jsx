import Header from "./components/Header/Header";
import ProfComponent from "./components/Header/ProfComponent";
import Testimonials from "./components/Testimonials/Testimonials";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio"


function App() {

  const headerCSS ="h-full pb-2 bg-gradient-to-l from-gray-500 via-gray-700 to-gray-900 sm:h-screen";
  const lightColor = "bg-gradient-to-l from-gray-500 via-gray-700 to-gray-900";

  return (
    <div className="w-full relative bg-slate-900 text-white overflow-x-hidden m-0 p-0 box-border" >
      <div className={headerCSS} >
        <Header />
        <ProfComponent />    
      </div>
      <Services />
      <div className={lightColor} >
        <Projects />
      </div>
      <Testimonials />
      <div className={lightColor} >
        <Portfolio />
      </div>
    </div>
  )
}

export default App;
