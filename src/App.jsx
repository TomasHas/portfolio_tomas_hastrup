import Main from "./components/Main";
import SideNav from "./components/SideNav";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";

function App() {
  return (
    <div className=" bg-gray-900">
      <SideNav />
      <Main />
      <Projects />
      <Work />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
}

export default App;
