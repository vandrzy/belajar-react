import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/auth/register"}>Register</Link>
      <Link to={"/auth/login"}>Login</Link>
      <Link to={"/user"}>user</Link>
      <Link to={"/blog"}>blog</Link>
    </div>
  );
};

export default Navbar;
