import ProfilePic from "../assets/images/ProfilePic.jpg";

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '50vh' }}>
      <div style={{ marginLeft: '20px' }}>
        <img
          src={ProfilePic}
          alt="Profile Photo"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        ></img>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <p style={{ fontSize: '24px', float: 'right', marginLeft: '20px' }}>
          After 30 years of molecular biology research, teaching and national education policy experience, I am taking that experience into full stack web development. So many ideas I would love to bring to fruition. Adding my new knowledge and experience of CSS, HTML, Javascript, React, mySQL, dongoDB and more to hopefully do some great stuff.          </p>
      </div>
    </div>
  );
}
