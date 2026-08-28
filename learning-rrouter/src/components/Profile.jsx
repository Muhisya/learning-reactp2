import { Link } from "react-router";

function Profile() {
  return (
    <div>
      <h1>User Profile Page</h1>
      <p>Welcome to your profile dashboard!</p>
      <nav style={{ display: 'flex', gap: '10px', marginTop: '10px', flexDirection: 'column', fontSize: '25px', textDecoration: 'none' }}>
        <Link to="/">Back to Home</Link>
        <Link to="/About">Go to About</Link>
      </nav>
    </div>
  );
}

export default Profile;