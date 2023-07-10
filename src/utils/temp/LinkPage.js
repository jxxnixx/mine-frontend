import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Public</h2>
      <Link to="/api/auth/login">Login</Link>
      <Link to="/api/account">Register</Link>
      <br />
      <h2>Private</h2>
      <Link to="/Home">Home</Link>
      {/* <Link to="/editor">Editors Page</Link>
            <Link to="/admin">Admin Page</Link> */}
    </section>
  );
};

export default LinkPage;
