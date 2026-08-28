import { Link } from "react-router";

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/">Back to Home Page</Link>
      </nav>
    </div>
  );
}

export default NotFound;