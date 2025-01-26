import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
