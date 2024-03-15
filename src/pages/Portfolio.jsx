import CourseLogo from "../assets/images/CourseLogo.jpg";
import BeerPoetry from "../assets/images/BeerPoetry.jpg";
import WeatherDashboard from "../assets/images/WeatherDashboard.jpg";
import LogoMaker from "../assets/images/LogoMaker.jpg";
import EmployeeTracker from "../assets/images/EmployeeTracker.jpg";
import exambuilder from "../assets/images/exambuilder.jpg";

export default function Portfolio() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '2rem', }}>
      <div className="card" style={{ width: "18rem", color: "#FCDEBE",marginBottom: "2rem", backgroundColor: "rgba(52, 52, 74, 0.5)" }}>
        <img className="card-img-top" src= {exambuilder} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Exam Builder</h5>
        <p className="card-text">Instructors are able to build, customize, reuse and assign exams, students are able to take exams, review progress and grades.</p>
        <a href="https://exam-builder.onrender.com" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px" }}>Deployed</a>
        <a href="https://github.com/JessicaDubina/exam-builder" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px" }}>GitHub Repository</a>
      </div>
      

      <div className="card" style={{ width: "18rem", color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "rgba(52, 52, 74, 0.5)" }}>
        <img className="card-img-top" src= {BeerPoetry} alt="Beer is Poetic" style={{ height: "160px" }}></img>
        <h5 className="card-title">Beer and Poetry</h5>
        <p className="card-text">A site to find breweries in your local area or one you are about to visit, and to be entertained by poetry about beer while searching.</p>
        <a href="https://jonsantosdev.github.io/beer-is-poetic/" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>Deployed</a>
        <a href="https://github.com/jonsantosdev/beer-is-poetic" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>Github Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "rgba(52, 52, 74, 0.5)" }}>
        <img className="card-img-top" src= {WeatherDashboard} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Weather Dashboard</h5>
        <p className="card-text">A quick and simple weather forecast dashboard to find today's weather and the next 5 day forecast, with ability to save and delete searches</p>
        <a href="https://moonweatherdash.netlify.app" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/WeatherDashboard" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "rgba(52, 52, 74, 0.5)"}}>
        <img className="card-img-top" src= {CourseLogo} alt="course logo" style={{ height: "160px" }}></img>
        <h5 className="card-title">Course Management</h5>
        <p className="card-text">A simple course management tool, to manage students, create groups for projects/labs and several features in development.</p>
        <a href="https://coursemanagement-9c13757a824b.herokuapp.com/" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/teams_problem_solution/" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "rgba(52, 52, 74, 0.5)" }}>
        <img className="card-img-top" src= {EmployeeTracker} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Employee Tracker</h5>
        <p className="card-text">A command line interface that allows a user to keep track of, update and remove employees, managers, roles and salaries</p>
        <a href="https://github.com/TreyLathe/employee-tracker-chal12" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>Not Deployed</a>
        <a href="https://github.com/TreyLathe/employee-tracker-chal12" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE",marginBottom: "2rem", backgroundColor: "rgba(52, 52, 74, 0.5)" }}>
        <img className="card-img-top" src= {LogoMaker} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Logo Maker</h5>
        <p className="card-text">A command line interfact to create a name initial logo of with choices of text, shape and color, creating an svg file with a unique name for later use.</p>
        <a href="https://github.com/TreyLathe/logo-creator" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px" }}>Not Deployed</a>
        <a href="https://github.com/TreyLathe/logo-creator" className="btn" style={{ backgroundColor: "rgba(118, 152, 179, 0.5)", color: "#FCDEBE", marginBottom: "5px" }}>Github Repository</a>
      </div>

      
    </div>
  );
}
