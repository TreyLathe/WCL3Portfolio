export default function Portfolio() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '2rem', }}>
      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768"}}>
        <img className="card-img-top" src="../../assets/images/CourseLog.jpg" alt="course logo"></img>
        <h5 className="card-title">Course Management</h5>
        <p className="card-text">A simple course management tool, to manage students, create groups for projects/labs and several features in development.</p>
        <a href="https://coursemanagement-9c13757a824b.herokuapp.com/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/teams_problem_solution/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <h5 className="card-title">Beer and Poetry</h5>
        <p className="card-text">A site to find breweries in your local area or one you are about to visit, and to be entertained by poetry about beer while searching.</p>
        <a href="https://jonsantosdev.github.io/beer-is-poetic/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/jonsantosdev/beer-is-poetic" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Github Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <h5 className="card-title">Weather Dashboard</h5>
        <p className="card-text">A quick and simple weather forecast dashboard to find today's weather and the next 5 day forecast, with ability to save and delete searches</p>
        <a href="https://treylathe.github.io/weatherDashboardMod6/" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Deployed</a>
        <a href="https://github.com/TreyLathe/weatherDashboardMod6" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>GitHub Repository</a>
      </div>

      <div className="card" style={{ width: "18rem",color: "#FCDEBE", marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <h5 className="card-title">TBD</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Go somewhere</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE",marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src="" alt="Card image cap"></img>
        <h5 className="card-title">TBD</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Go somewhere</a>
      </div>

      <div className="card" style={{ width: "18rem", color: "#FCDEBE",marginBottom: "2rem", backgroundColor: "#5E5768" }}>
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <h5 className="card-title">TBD</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: "#928779"}}>Go somewhere</a>
      </div>
    </div>
  );
}
