import React, { useState } from 'react';
import Lathe_Resume2024 from "../assets/docs/Lathe_Resume2024.pdf";

export default function Resume() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const isSectionOpen = (section) => {
    return openSection === section;
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "30px"}}>
      <div >
        <ul>
          <li>
            <h3 onClick={() => toggleSection('education')} style={{ cursor: "pointer", textDecoration: "underline" }}>Education</h3>
            {isSectionOpen('education') && (
              <ul>
                <li>
                  <strong>BS Molecular Biology </strong><br />Brigham Young University
                </li>
                <li>
                <strong>MS Molecular Biology </strong><br />University of Rochester
                </li>
                <li>
                <strong>PhD Molecular Biology </strong><br /> University of Rochester
                </li>
                <li>
                <strong>Full Stack Development</strong><br /> UC Berkeley Extension
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul>
          <li>
            <h3 onClick={() => toggleSection('workExperience')} style={{ cursor: "pointer", textDecoration: "underline" }}>Work Experience</h3>
            {isSectionOpen('workExperience') && (
              <ul>
                <li>
                  <strong>Freelance consultant</strong><br />Full Stack Development <br /> Project management <br /> Education
                </li>
                <li>
                <strong>Executive Director</strong> <br />Maker Ed. Initiative, 501(c)(3)
                </li>
                <li>
                <strong>S&T Fellow, Science Expert</strong> <br />National Science Foundation
                </li>
                <li>
                <strong>Chief Science Officer</strong><br />OpenHelix, LLC
                </li>
                <li>
                <strong>Research Scientist</strong><br />European Mol. Bio. Laboratory
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul>
          <li>
            <h3 onClick={() => toggleSection('resumePdf')} style={{ cursor: "pointer", textDecoration: "underline" }}>Download Resume PDF</h3>
            {isSectionOpen('resumePdf') && (
              <ul>
                <li>
                  <a href={Lathe_Resume2024} download>PDF of full resume</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div >
        <ul>
          <li>
            <h3 onClick={() => toggleSection('fullstackSkills')} style={{ cursor: "pointer", textDecoration: "underline" }}>Fullstack Skills</h3>
            {isSectionOpen('fullstackSkills') && (
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>mySQL, Sequalize </li>
                <li>MongoDB, Express, <br />React, Node.js (MERN) </li>
                
              </ul>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleSection('trilingual')} style={{ cursor: "pointer", textDecoration: "underline" }}>Trilingual</h3>
            {isSectionOpen('trilingual') && (
              <ul>
                <li>English, Native</li>
                <li>Korean, CEFR C1/2 </li>
                <li>German, CEFR B1/2 </li>
              </ul>
            )}
          </li>
          <li>
            <h3 onClick={() => toggleSection('generalSkills')} style={{ cursor: "pointer", textDecoration: "underline" }} >General Skills</h3>
            {isSectionOpen('generalSkills') && (
              <ul>
                <li>Organization Management</li>
                <li>Entrepreneurship</li>
                <li>Grant Writing/Management</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
// import Lathe_Resume2024 from "../assets/docs/Lathe_Resume2024.pdf";

// export default function Resume() {
//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ flex: 1, padding: "1rem" }}>
//         <ul>
//           <li>
//             <h3>Education</h3>
//           </li>
//           <ul>
//             <li>
//               BS Molecular Biology, Brigham Young University
//             </li>
//             <li>
//               MS Molecular Biology, University of Rochester
//             </li>
//             <li>
//               PhD Molecular Biology, University of Rochester
//             </li>
//             <li>
//               Full Stack Development, UC Berkeley Extension
//             </li>
//           </ul>
//         </ul>
//         <ul>
//           <li>
//             <h3>Work Experience</h3>
//           </li>
//           <ul>
//             <li>
//              Freelance consultant, Full Stack Development
//             </li>
//             <li>
//               Maker Education Initiative, 501(c)(3)/Executive Director
//             </li>
//             <li>
//               National Science Foundation/Science Expert
//             </li>
//             <li>
//               OpenHelix, LLC/Chief Science Officer
//             </li>
//             <li>
//                 European Molecular Biology Laboratory/Research Scientist
//             </li>
//           </ul>
//         </ul>
//         <ul>
//             <li><h3>Resume PDF</h3></li>
//             <ul><li>
//             <a href={Lathe_Resume2024} download>Download PDF of full resume</a>
//             </li>
//             </ul>
//           </ul>
//       </div>

//       <div style={{ flex: 1, padding: "1rem" }}>
//         <ul>
//         <p>
//           <li>
//             <h3>Fullstack Skills</h3>
//           </li>
//             <ul>
//               <li>HTML, CSS, JavaScript</li>
//               <li>React</li>
//               <li>Node.js, Express</li>
//               <li>mySQL, MongoDB</li>
//             </ul>

//           </p>

//           <p><li>
//             <h3>Trilingual</h3>
//           </li>
//               <ul>
//                 <li>English, Native</li>
//                 <li>Korean, CEFR C1/2 </li>
//                 <li>German, CEFR B1/2 </li>
//               </ul>

//               </p>

//           <li>
//             <h3>General Skills</h3>
//               <ul>
//                 <li>Organizational Management</li>
//                 <li>Entrepreneurship</li>
//                 <li>Grant Writing/Management</li>
//               </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
