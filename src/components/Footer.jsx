import githublogo from "../assets/images/githublogo.png";
import linkedinlogo from "../assets/images/linkedinlogo.png";

export default function Footer() {
  return (
    <div>
      <hr></hr>
    <div style={{ display: "flex", justifyContent: "center"}}>
      <div style={{ padding: "1rem" }}>
        <a href="https://github.com/TreyLathe" target="_blank"><img src={githublogo} style={{ width: '40px', height: '40px' }}></img></a>
      </div>
      <div style={{ padding: "1rem" }}>
        <a href="https://linkedin.com/in/wclathe" target="_blank"><img src={linkedinlogo} style={{ width: '40px', height: '40px' }}></img></a>
      </div>
    </div>
    </div>
  );
}