import Header from "./components/Header/Header";
import ProfComponent from "./components/Header/ProfComponent";
import Interests from "./components/Interests/Interests";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
  const headerCSS =
    "h-full pb-2 bg-gradient-to-l from-gray-500 via-gray-700 to-gray-900 sm:h-screen";
  const lightColor = "bg-gradient-to-l from-gray-500 via-gray-700 to-gray-900";

  return (
    <div className="w-full relative bg-gradient-to-l from-slate-700 via-slate-800 to-slate-900 text-white overflow-x-hidden box-border">
      <div className={headerCSS}>
        <Header />
        <ProfComponent />
      </div>
      <Services />
      <div className={lightColor}>
        <Projects />
      </div>
      <Interests />
      <div className={lightColor}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
