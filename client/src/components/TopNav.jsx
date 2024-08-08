import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNav = () => {
  const navlinks = [
    { name: "Home", Link: "/" },
    { name: "Tx Show", Link: "/tv" },
    { name: "My List", Link: "/mylist" },
    { name: "Movies", Link: "/movies" },
  ];

  return (
    <NavContainer>
      <div className="leftSide">
        <div className="logo">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png
"
          alt="logo"
        />
        </div>
        <ul className="links">
             {
                navlinks.map(({name, link}) => {
                    return (
                        <li key={name}>
                            <Link>{name }</Link>
                        </li>
                    )
                })
             }
        </ul>
      </div>
      <div className="rightSide"></div>
    </NavContainer>
  );
};

const NavContainer = styled.div``;

export default TopNav;
