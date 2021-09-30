import "./App.css";
import "./index.css";
import TypeIt from "typeit-react";
import { FaBars } from "react-icons/fa";
import MyImage from "./assets/images/me.jpg";
import BU from "./assets/images/BU.jpg";
const NavBar = () => {
  return (
    <div>
      <nav>
        <button id="dropdownHidden">
          <FaBars size={40} />
        </button>

        <ul>
          <li className="one" id="1">
            <a href="index.html">Home</a>
          </li>
          <li className="two" id="2">
            <a href="#personal">Personal</a>
          </li>
          <li className="three" id="3">
            <a href="#education">Education</a>
          </li>
          <li className="four" id="4">
            <a href="#projects">Projects</a>
          </li>
          <li className="five" id="5">
            <a href="#licenses">Licenses</a>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
  );
};
const Welcome = () => {
  return (
    <div>
      <header id="Welcome">
        <div id="greeting" data-aos="fade-up">
          <h2 id="hello">
            <TypeIt
              element={"h2"}
              getBeforeInit={(instance) => {
                instance
                  .options({ speed: 50 })
                  .type("Hi,")
                  .pause(450)
                  .options({ speed: 50 })
                  .type("I'm Farid Karimli");
                return instance;
              }}
            />
          </h2>
        </div>
      </header>
    </div>
  );
};
const About = () => {
  return (
    <div id="personal" className="info" data-aos="fade-in">
      <div className="left-side">
        <h2> About Me </h2>
        <p>
          I come from Baku, Azerbaijan. <br />
          I'm currently mastering React on my own time, and using Python for
          Data Science and algorithm design in my courses.
        </p>

        <p>Skills:</p>
        <ul>
          <li>Python (Pandas, NumPy, matplotlib, Scikit-Learn)</li>
          <li>React JS (Hooks, Context API)</li>
          <li>HTML, CSS, Javascript ES6</li>
          <li>Java</li>
          <li>Git, GitHub</li>
        </ul>
      </div>
      <br />
      <div id="image-of-me" className="right-side">
        <img id="me" src={MyImage} width="" height="" alt="here" />
      </div>
    </div>
  );
};
const Education = () => {
  return (
    <div
      id="education"
      className="info"
      data-aos="fade-in"
      style={{ clear: "both" }}
    >
      <div className="left-side">
        <h2> Education </h2>
        <p>
          {" "}
          I am currently a junior at Boston University in Boston, Massachussets.
          I started my time at BU right after I finished high school in 2019.{" "}
          <br /> I am majoring in Computer Science with a minor in Economics.
        </p>
        <p>
          {" "}
          I am part of Google Developers Club at BU, and a member of BU UPE,
          where I am currently on the recruiting team. I am also a Course
          Assistant for CS111 Intro. to Computer Science I in Boston University.
        </p>
        <br />
        <br />
        <br />
      </div>
      <div className="right-side">
        <img id="BU" src={BU} alt="Farid Karimli" />
      </div>
    </div>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="info"
      data-aos="fade-in"
      style={{ clear: "both" }}
    >
      <div className="left-side">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="kborovik.com">KBorovik Production</a>
          </li>
          <li>THIS website built using React</li>
          <li>Small scale React Apps</li>
          <li>Web Scraping/Automation using Puppeteer, Beautiful Soup </li>
          <li>Data Wrangling/Manipulation using Python and Scikit-Learn</li>
          <li>Non-graphical games using Java and Python</li>
        </ul>

        <p>
          {" "}
          Check out my <a href="https://github.com/Farid-Karimli">GitHub</a> for
          more.
        </p>
      </div>
      <div className="right-side">
        <h2> Contact Information </h2>
        <ul>
          <li>
            Email:
            <a href="mailto:karimli.farid@icloud.com">
              karimli.farid@icloud.com
            </a>
          </li>
          <li>Phone: +1 857 234 7396 </li>
          <li>Address: 135 Pleasant Street, Brookline, MA 02446</li>
        </ul>
      </div>
    </div>
  );
};
const App = function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Education />
      <Projects />
    </div>
  );
};
export default App;
