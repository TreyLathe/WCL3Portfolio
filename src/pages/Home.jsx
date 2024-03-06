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
          Welcome to my portfolio! I am a full stack web developer with a passion for creating and learning. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, React, and more. I am always looking for new opportunities to learn and grow as a developer. I am currently seeking work as a web developer. Please feel free to reach out to me!
        </p>
      </div>
    </div>
  );
}
