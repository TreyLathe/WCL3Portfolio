export default function Resume() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: "1rem" }}>
        <ul>
          <li>
            <h3>Education</h3>
          </li>
          <ul>
            <li>
              BS Molecular Biology, Brigham Young University
            </li>
            <li>
              MS Molecular Biology, University of Rochester
            </li>
            <li>
              PhD Molecular Biology, University of Rochester
            </li>
            <li>
              Full Stack Development, UC Berkeley Extension
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <h3>Work Experience</h3>
          </li>
          <ul>
            <li>
             Freelance consultant, Full Stack Development
            </li>
            <li>
              Maker Education Initiative, 501(c)(3)/Executive Director
            </li>
            <li>
              National Science Foundation/Science Expert
            </li>
            <li>
              OpenHelix, LLC/Chief Science Officer
            </li>
            <li>
                European Molecular Biology Laboratory/Research Scientist
            </li>
          </ul>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "1rem" }}>
        <ul>
        <p>
          <li>
            <h3>Fullstack Skills</h3>
          </li>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Node.js, Express</li>
              <li>mySQL, MongoDB</li>
            </ul>

          </p>

          <p><li>
            <h3>Trilingual</h3>
          </li>
              <ul>
                <li>English, Native</li>
                <li>Korean, CEFR C1/2 </li>
                <li>German, CEFR B1/2 </li>
              </ul>

              </p>

          <li>
            <h3>General Skills</h3>
              <ul>
                <li>Organizational Management</li>
                <li>Entrepeurship</li>
                <li>Grant Writing/Management</li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
