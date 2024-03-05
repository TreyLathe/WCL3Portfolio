export default function Header() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "1rem" }}>
          <h2>Warren C. Lathe III</h2>
        </div>
        <div style={{ flex: 1, padding: "1.5rem" }}>
         <a href="mailto:warrenlathe@me.com" target="_blank"><h3>warrenlathe@me.com</h3></a>
        </div>
      </div>
    );
  }