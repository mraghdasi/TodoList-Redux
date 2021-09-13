import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className={"nav"}>
        <li>
          <Link className={"link"} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={"link"} to={"/todolist"}>todo List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
