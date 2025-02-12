import Main from "./components/Main";
import SideNav from "./components/SideNav";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useTheme } from "./hooks";

// import Resume from "./components/Resume";

function App() {
  const theme = useTheme();
  return (
    // <div className=" overflow-hidden">

    <div className={` ${theme.activeTheme.bgColor} overflow-hidden`}>
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
