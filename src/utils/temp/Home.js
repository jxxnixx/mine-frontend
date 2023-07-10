import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { removeCookie, RemoveCookie } from "../api/cookie";

// 로그인 성공하면 뜨는 홈페이지

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  //const navigate = useNavigate()

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    removeCookie();

    //removeCookie(accessToken);
    //navigate('/linkpage');
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p> 로그인 성공! </p>
      {/* <p>You are logged in!</p> */}
      <br />
      {/* <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link> */}
      <br />
      <Link to="/AccountFetch"> Mypage </Link>
      <Link to="/linkpage">Go to the link page</Link>
      <div className="flexGrow">
        <button onClick={logout}>
          Sign Out
          <Link to="/"></Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
