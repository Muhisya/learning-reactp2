import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>User Home Page</h1>
      <p>Welcome to your Home dashboard!</p>
      <nav style={{ display: 'flex', gap: '10px', marginTop: '10px', flexDirection: 'column', fontSize: '25px', textDecoration: 'none'  }}>
        <navLink>
          <Link to="/">Back to Home</Link>
        </navLink>
        <navLink>
          <Link to="/About">Go to About</Link>
        </navLink>
        <navLink>
          <Link to="/profile">Go to Profile</Link>
        </navLink>
      </nav>
    </div>
  );
}

export default Home;