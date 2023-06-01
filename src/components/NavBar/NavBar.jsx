import { StyledLink, Header } from "./NavBar.styles";
import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "Home",
    link: "/",
  },
  {
    id: nanoid(),
    text: "Tweets",
    link: "/tweets",
  },
];

const NavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <nav key={id}>
      <StyledLink to={link}>{text}</StyledLink>
    </nav>
  ));
  return <Header>{elements}</Header>;
};

export default NavBar;
