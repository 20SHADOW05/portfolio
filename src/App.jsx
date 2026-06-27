import "./styles/global.css";
import "./styles/layout.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="site-wrap">
      <main>
        <Header />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
