import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Informs({
  email,
  nickname,
  phone,
  address,
  position,
  message,
  techStack,
  experience,
}) {
  return (
    <div>
      <h2>profile</h2>
      <p>{nickname}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{position}</p>
      <p>{techStack}</p>
      <p>{experience}</p>
      <p>{address}</p>
      <p>{message}</p>
      <p>
        <Link to={"test link"}> test link </Link>
      </p>
    </div>
  );
}

Informs.propTypes = {
  email: PropTypes.string,
  nickname: PropTypes.string,
  phone: PropTypes.number,
  address: PropTypes.string,
  position: PropTypes.string,
  link: PropTypes.string,
  message: PropTypes.string,
  techStack: PropTypes.string,
  experience: PropTypes.string,
  //genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Informs;
