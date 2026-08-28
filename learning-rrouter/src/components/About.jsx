import { Link } from "react-router";

function About() {
  return (
    <div>
      <h1>User About Page</h1>
      <p>Everything you need to know about us.</p>
      <nav style={{ display: 'flex', gap: '10px', marginTop: '10px', flexDirection: 'column', fontSize: '25px' }}>
        <Link to="/">Back to Home</Link>
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}

export default About;