import CourseLogo from "../assets/images/CourseLogo.jpg";
import BeerPoetry from "../assets/images/BeerPoetry.jpg";
import WeatherDashboard from "../assets/images/WeatherDashboard.jpg";
import JSQuiz from "../assets/images/JSQuiz.jpg";
import LogoMaker from "../assets/images/LogoMaker.jpg";
import EmployeeTracker from "../assets/images/EmployeeTracker.jpg";

export default function Portfolio() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '2rem', }}>
      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768"}}>
        <img className="card-img-top" src= {CourseLogo} alt="course logo" style={{ height: "160px" }}></img>
        <h5 className="card-title">Course Management</h5>
        <p className="card-text">A simple course management tool, to manage students, create groups for projects/labs and several features in development.</p>
        <a href="https://coursemanagement-9c13757a824b.herokuapp.com/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/teams_problem_solution/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src= {BeerPoetry} alt="Beer is Poetic" style={{ height: "160px" }}></img>
        <h5 className="card-title">Beer and Poetry</h5>
        <p className="card-text">A site to find breweries in your local area or one you are about to visit, and to be entertained by poetry about beer while searching.</p>
        <a href="https://jonsantosdev.github.io/beer-is-poetic/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/jonsantosdev/beer-is-poetic" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Github Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src= {WeatherDashboard} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Weather Dashboard</h5>
        <p className="card-text">A quick and simple weather forecast dashboard to find today's weather and the next 5 day forecast, with ability to save and delete searches</p>
        <a href="https://treylathe.github.io/weatherDashboardMod6/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/weatherDashboardMod6" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src= {EmployeeTracker} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Employee Tracker</h5>
        <p className="card-text">A command line interface that allows a user to keep track of employees, managers, roles and salaries</p>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Not Deployed</a>
        <a href="https://github.com/TreyLathe/employee-tracker-chal12" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE",marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src= {LogoMaker} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Logo Maker</h5>
        <p className="card-text">A command line interfact to create a name initial logo of a chosen shape and color, creating an svg file.</p>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Not Deployed</a>
        <a href="https://github.com/TreyLathe/logo-creator" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Github Repository</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE",marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src= {JSQuiz} alt="Card image cap" style={{ height: "160px" }}></img>
        <h5 className="card-title">Simple JavaScript Quiz</h5>
        <p className="card-text">A simple, timed Javascript Quiz to test a beginning users knowledge of Javascript with a high score board.</p>
        <a href="https://treylathe.github.io/mod-4-challenge/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/mod-4-challenge" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>GitHub Repository</a>
      </div>
    </div>
  );
}
